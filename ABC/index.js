const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const Product = require("./products/product.js")

mongoose
    .connect(
        "mongodb+srv://devthakkarlm10:AWXdFC2kCICH5fr2@cluster0.liciyj3.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(`DB Connection Error: ${err.message}`));

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render("home.ejs");
})

app.get('/list', async (req, res) => {
    const product = await Product.find();
    res.render("page1.ejs", { product });
})

app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
})