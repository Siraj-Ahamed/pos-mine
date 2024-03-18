const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: String,
        quantity: Number,
        price: Number,
        image: String,
    },
    {
        timestamos: true,
    }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
