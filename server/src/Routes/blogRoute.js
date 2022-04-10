

// Creating a route blog route
const express = require('express');
const router = express.Router();
const { Blog, blogValidate } = require('../Models/BlogModel');



// retrieve all blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.send(blogs);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/blogs", async (req, res) => {
    const { err } = blogValidate.validate(req.body);
    if (err) return res.status(400).send(err.details[0].message);

    const blog = new Blog({
        title: req.body.title,
        body: req.body.body,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });
    
    try {
        const savedBlog = await blog.save();
        res.send({ blog: blog._id });
    }
    catch (err) {
        res.status(400).send(err);
    }
});


// retrieve a blog by id 
router.get('/blogs/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const blog = await Blog.findById(_id);
        res.send(blog);
        } catch (err) {
            console.log("Failed to find blog");
            res.status(500).send(err);
        }
    }
);


module.exports = router;