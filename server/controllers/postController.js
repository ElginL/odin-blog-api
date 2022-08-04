const Post = require('../models/post');
const Comment = require('../models/comment');
const { body, validationResult } = require('express-validator');

const getUnpublishedPosts = (req, res, next) => {
    Post.find({ isPublished: false })
        .exec((err, results) => {
            if (err) {
                return next(err);
            }

            res.json(results);
        });
}

const getPublishedPosts = (req, res, next) => {
    Post.find({ isPublished: true })
        .exec((err, results) => {
            if (err) {
                return next(err);
            }

            res.json(results);
        });
};

const createPost = [
    body('title')
        .trim()
        .isLength({ min: 6, max: 50 })
        .withMessage("Title must be between 6 and 50 characters"),
    body('content')
        .trim()
        .isLength({ min: 6 })
        .withMessage("Content must be at least 6 characters long"),
    body('isPublished')
        .isBoolean(),
    (req, res, next) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            res.status(400).json({ errors });
            return;
        }

        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            isPublished: req.body.isPublished,
            photo: req.file ? req.file.filename : ""
        });
    
        newPost.save(err => {
            if (err) {
                return next(err);
            }
    
            res.sendStatus(201);
        })
    }
]

const getOnePost = (req, res, next) => {
    const postId = req.params.id;

    Post.findById(postId)
        .exec((err, foundPost) => {
            if (err) {
                return next(err);
            }

            if (!foundPost) {
                res.status(400).json({ message: "Failed to find post. Check post id." });
                return;
            }

            res.json(foundPost);
        });
};

const editOnePost = [
    body('title')
        .trim()
        .isLength({ min: 6, max: 50 })
        .withMessage("Title must be between 6 and 50 characters"),
    body('content')
        .trim()
        .isLength({ min: 6 })
        .withMessage("Content must be at least 6 characters long"),
    body('isPublished')
        .isBoolean(),
    (req, res, next) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            res.status(400).json({ errors });
            return;
        }

        const postId = req.params.id;
    
        Post.findByIdAndUpdate(postId, {
            title: req.body.title,
            content: req.body.content,
            isPublished: req.body.isPublished,
            photo: req.file ? req.file.filename : req.body.imgName ? req.body.imgName: ""
        }, { 
            new: true 
        }, 
        (err, updatedPost) => {
            if (err) {
                return next(err);
            }
    
            if (!updatedPost) {
                res.status(400).json({ message: "Failed to update post. Check post id." });
                return;
            }
    
            res.json(updatedPost);
        });
    }
]

const deletePost = (req, res, next) => {
    const postId = req.params.id;

    Post.findByIdAndDelete(postId)
        .exec((err, deletedPost) => {
            if (err) {
                return next(err);
            }
        
            Comment.deleteMany({ post: postId }, err => {
                if (err) {
                    return next(err);
                }

                if (!deletedPost) {
                    res.status(400).json({ message: "Failed to find post to delete. Check post id", err: err.message });
                    return;
                }

                res.json(deletedPost);
            });      
        })

}

const getAllComments = (req, res, next) => {
    const postId = req.params.id;

    Comment.find({ post: postId })
        .exec((err, comments) => {
            if (err) {
                return next(err);
            }

            res.json(comments);
        })
}

const createComment = [
    body('username')
        .trim()
        .isLength({ min: 5, max: 20 })
        .withMessage("Username must be between 5 and 20 characters"),
    body('text')
        .trim()
        .isLength({ min: 6, max: 60 })
        .withMessage("Comment must be between 6 and 60 characters"),
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors });
            return;
        }

        const postId = req.params.id;
    
        const newComment = new Comment({
            username: req.body.username,
            text: req.body.text,
            post: postId
        });
    
        newComment.save(err => {
            if (err) {
                return next(err);
            }
    
            res.sendStatus(201);
        })
    }
]

const deleteComment = (req, res, next) => {
    const commentId = req.params.id;

    Comment.findByIdAndDelete(commentId)
        .exec((err, deletedComment) => {
            if (err) {
                return next(err);
            }

            if (!deletedComment) {
                res.status(400).json("Cannot find comment to delete, check your id");
                return;
            }

            res.json(deletedComment);
        });
}

module.exports = {
    getUnpublishedPosts,
    getPublishedPosts,
    createPost,
    getOnePost,
    editOnePost,
    deletePost,
    getAllComments,
    createComment,
    deleteComment
}