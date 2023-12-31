// server/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Получение списка всех продуктов
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
