const express = require("express");
const { getAllProducts, deleteProduct,addProduct,updateProduct } = require("../controllers/product");
const router = express.Router();

router.get("/", getAllProducts);
router.delete("/:id", deleteProduct); 
router.post("/",addProduct)
router.put("/:id",updateProduct)

module.exports = router;

