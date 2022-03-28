const router = require('express').Router();
const User = require("../models/UserModel")
const Joi = require('@hapi/joi');
const JWT = require('jsonwebtoken');


const registerSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
});


router.get("/test", async (req, res) => {
    res.send("test success");      
});

//
router.post("/signup", async (req, res) => {
    // console.log(req.body);
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //check if user already exists in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');
 
        
    //hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = new User({

        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id });
    } catch (err) {
        res.status(400).send(err);
    }

});
    
router.post("/login", async (req, res) => {
    // console.log("Hello");
    
    const { err } = loginSchema.validate(req.body);
    if (err) return res.status(400).send(err.details[0].message);
    //check if user already exists in database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is wrong');

    //check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Email or password is wrong');

    //create and assign token
    const token = JWT.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});


module.exports = router;

