const Post = require('../models/post');
const Comment = require('../models/comment');

const getAllPosts = (req, res) => {
    Post.find()
        .exec((err, results) => {
            if (err) {
                res.status(400).json({ msg: "Failed to get all posts" });
                return;
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
            return;
        }

        res.sendStatus(201);
    })
}

const getOnePost = (req, res) => {
    const postId = req.params.id;

    Post.findById(postId)
        .exec((err, foundPost) => {
            if (err) {
                res.status(400).json({ msg: "Failed to get post" });
                return;
            }

            if (foundPost) {
                res.json(foundPost);
            } else {
                res.status(400).json({ msg: "Failed to find post. Check post id." });
            }
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
            return;
        }

        if (updatedPost) {
            res.json(updatedPost);
        } else {
            res.status(400).json({ msg: "Failed to update post. Check post id." });
        }
    });
}

const deletePost = (req, res) => {
    const postId = req.params.id;

    Post.findByIdAndDelete(postId)
        .exec((err, deletedPost) => {
            if (err) {
                res.status(400).json({ msg: "Failed to delete post" });
                return;
            }
        
            Comment.deleteMany({ post: postId }, err => {
                if (err) {
                    res.status(400).json({ msg: "Failed to delete comments related to this post." });
                    return;
                }

                res.json(deletedPost);
            });      
    })

}

const getAllComments = (req, res) => {
    const postId = req.params.id;

    Comment.find({ post: postId })
        .exec((err, comments) => {
            if (err) {
                res.status(400).json({ msg: "Failed to get all comments" });
                return;
            }

            res.json(comments);
        })
}

const createComment = (req, res) => {
    const postId = req.params.id;

    const newComment = new Comment({
        username: req.body.username,
        text: req.body.text,
        post: postId
    });

    newComment.save(err => {
        if (err) {
            res.status(400).json({ msg: "Failed to create new comment" });
            return;
        }

        res.sendStatus(201);
    })
};

const deleteComment = (req, res) => {
    const commentId = req.params.id;

    Comment.findByIdAndDelete(commentId)
        .exec((err, deletedComment) => {
            if (err) {
                res.status(400).json({ msg: "Failed to delete comment" });
                return;
            }

            if (deletedComment) {
                res.json(deletedComment);
            } else {
                res.status(400).json("Cannot find comment to delete, check your id");
            }
        })
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