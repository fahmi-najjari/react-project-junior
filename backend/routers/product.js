const express = require("express");
const { getAllProducts, deleteProduct,addProduct } = require("../controllers/product");
const router = express.Router();

router.get("/", getAllProducts);
router.delete("/:id", deleteProduct); 
router.post("/",addProduct)

module.exports = router;

