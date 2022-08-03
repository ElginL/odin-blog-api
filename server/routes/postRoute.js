const express = require('express');
const router = express.Router();
const path = require('path');
const postController = require('../controllers/postController');
const verifyToken = require('../middleware/jwtVerify');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function(req, file, cb) {
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

// Get all Posts
router.get('/unpublished', postController.getUnpublishedPosts);

// Get all published posts
router.get('/published', postController.getPublishedPosts);

// Create post
router.post('/', verifyToken, postController.createPost);

// Get one post
router.get('/:id', postController.getOnePost);

// Edit one post
router.put('/:id', verifyToken, upload.single('photo'), postController.editOnePost);

// Delete post
router.delete('/:id', verifyToken, postController.deletePost);

// Get all comments of a post
router.get('/:id/comments', postController.getAllComments);

// Create a comment for a post.
router.post('/:id/comments', postController.createComment);

// Delete a comment from a post.
router.delete('/comment/:id', verifyToken, postController.deleteComment);

module.exports = router;