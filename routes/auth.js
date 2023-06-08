const express = require('express');
const Product = require('./models/product');

const app = express();

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({}, 'name price');
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
});