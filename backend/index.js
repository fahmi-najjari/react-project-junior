const express = require("express");
const db = require("./models/index");
const App = express();
const cors = require("cors");
const productRouter = require("./routers/product");
const { json } = require("body-parser"); 
const port = 5000;

App.use(json());
App.use(cors());

App.use("/api/product", productRouter);

App.listen(port, () => {
  console.log(`App listening on http://127.0.0.1:${port}`);
});