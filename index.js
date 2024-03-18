const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Hi from baceknd");
});

mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => {
        console.log(`Connected to database ${con.connection.host}`);
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening to port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("Connection failed");
    });
