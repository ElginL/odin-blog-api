const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all Posts
router.get('/', postController.getAllPosts);

// Create post
router.post('/', postController.createPost);

// Get one post
router.get('/:id', postController.getOnePost);

// Edit one post
router.put('/:id', postController.editOnePost);

// Delete post
router.delete('/:id', postController.deletePost);

module.exports = router;