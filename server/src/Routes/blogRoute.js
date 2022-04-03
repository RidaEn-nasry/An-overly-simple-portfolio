

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

module.exports = router;