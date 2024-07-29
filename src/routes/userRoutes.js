const express = require('express');
const router = express.Router();
const { viewItems, viewItemDetails, addItemComment } = require('../controllers/userController');

// Endpoints for users to view items and add comments
router.get('/items', viewItems);
router.get('/items/:id', viewItemDetails);
router.post('/items/:id/comments', addItemComment);

module.exports = router;
