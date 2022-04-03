// creating a blog model


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');


const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});


// validate the blog model using joi
const blogValidate = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    body: Joi.string().min(3).max(1024).required(),
});
const Blog = mongoose.model('Blog', blogSchema);
exports.Blog = Blog;
exports.blogValidate = blogValidate;
