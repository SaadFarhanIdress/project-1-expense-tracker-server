const express = require('express');
const router = express.Router();
const postController = require('./postController');

router.get('/', postController.getPost);
router.post('/', postController.addPost);
router.delete('/:id', postController.deletePost);

module.exports = router;