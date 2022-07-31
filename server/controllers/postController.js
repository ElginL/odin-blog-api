const Post = require('../models/post');

const getAllPosts = (req, res) => {
    Post.find()
        .exec((err, results) => {
            if (err) {
                res.status(400).json({ msg: "Failed to get all posts" });
            }

            res.json(results);
        });
};

const createPost = (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        isPublished: req.body.isPublished
    });

    newPost.save(err => {
        if (err) {
            res.status(400).json({ msg: "Failed to create new post" })
        }

        res.sendStatus(201);
    })
}

const getOnePost = (req, res) => {
    const postId = req.params.id;

    Post.findById(postId)
        .exec((err, foundPost) => {
            if (err) {
                res.status(400).json({ msg: "Failed to get post" })
            }

            res.json(foundPost);
        });
};

const editOnePost = (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndUpdate(postId, {
        title: req.body.title,
        content: req.body.content,
        isPublished: req.body.isPublished
    }, { 
        new: true 
    }, 
    (err, updatedPost) => {
        if (err) {
            res.status(400).json({ msg: "Failed to update post" });
        }

        res.json(updatedPost);
    });
}

const deletePost = (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndDelete(postId)
        .exec((err, deletedPost) => {
            if (err) {
                res.status(400).json({ msg: "Failed to delete post" });
            }

            res.json(deletedPost);
        })
}

module.exports = {
    getAllPosts,
    createPost,
    getOnePost,
    editOnePost,
    deletePost
}