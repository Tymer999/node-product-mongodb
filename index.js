const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.route.js")
const app = express();

app.use(express.json());
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello from node api");
});

const PORT = process.env.PORT;

mongoose
  .connect(
    "mongodb+srv://Tymer999:gpUhPwnja8lQPMbP@backend.lohke.mongodb.net/Product?retryWrites=true&w=majority&appName=backend"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port 3000");
    });
    console.log("Connected to database");
  })
  .catch((erroor) => {
    console.log("Connection failed");
  });
