const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const verifyToken = require('../middleware/jwtVerify');

// Get all Posts
router.get('/', postController.getAllPosts);

// Create post
router.post('/', verifyToken, postController.createPost);

// Get one post
router.get('/:id', postController.getOnePost);

// Edit one post
router.put('/:id', verifyToken, postController.editOnePost);

// Delete post
router.delete('/:id', verifyToken, postController.deletePost);

// Get all comments of a post
router.get('/:id/comments', postController.getAllComments);

// Create a comment for a post.
router.post('/:id/comments', postController.createComment);

// Delete a comment from a post.
router.delete('/comment/:id', verifyToken, postController.deleteComment);

module.exports = router;