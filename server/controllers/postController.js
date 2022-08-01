const Post = require('../models/post');
const Comment = require('../models/comment');

const getAllPosts = (req, res, next) => {
    Post.find()
        .exec((err, results) => {
            if (err) {
                return next(err);
            }

            res.json(results);
        });
};

const createPost = (req, res, next) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        isPublished: req.body.isPublished
    });

    newPost.save(err => {
        if (err) {
            return next(err);
        }

        res.sendStatus(201);
    })
}

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

const editOnePost = (req, res, next) => {
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
            return next(err);
        }

        if (!updatedPost) {
            res.status(400).json({ message: "Failed to update post. Check post id." });
            return;
        }

        res.json(updatedPost);
    });
}

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

const createComment = (req, res, next) => {
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
};

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
    getAllPosts,
    createPost,
    getOnePost,
    editOnePost,
    deletePost,
    getAllComments,
    createComment,
    deleteComment
}