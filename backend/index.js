const express = require("express");
const cors = require("cors");
const products = require("./products");
const categories = require("./categories");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get('/products/categories',(req, res) => {
  res.send(categories);
})

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
