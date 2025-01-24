const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes.js");
const gameRoutes = require("./routes/gameRoutes.js");
const TagRoutes = require("./routes/TagRoutes.js")

const app = express();

mongoose.connect(process.env.DB_URL);

app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("api/tags", TagRoutes);

app.get("/", (req, res) => {
    res.send("hallo");
})

app.listen(process.env.PORT);
