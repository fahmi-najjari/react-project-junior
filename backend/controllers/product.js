const { Product } = require("../models/index");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addProduct: async (req, res) => {
    try {
      const { name, price, description, imageUrl } = req.body
      const newProduct = await Product.create({ name, price, description, imageUrl }) 
      res.status(201).json(newProduct)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Product.destroy({ where: { id } });
      res.status(201).json(deleted);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};