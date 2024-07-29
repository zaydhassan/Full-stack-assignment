const express = require('express');
const router = express.Router();
const { createItem, readItems, updateItem, deleteItem } = require('../controllers/adminController');

// CRUD operations for items
router.post('/item', createItem);
router.get('/items', readItems);
router.put('/item/:id', updateItem);
router.delete('/item/:id', deleteItem);

module.exports = router;
