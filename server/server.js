const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/authRoutes.js");
const gameRoutes = require("./routes/gameRoutes.js");
const TagRoutes = require("./routes/TagRoutes.js");
const reviewRoutes = require("./routes/reviewRoutes.js");
const cookieParser = require("cookie-parser");

const app = express();
let corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,PUT,POST,DELETE",
    credentials: true
}

app.use(cors(corsOptions));

app.use(cookieParser());



// mongoose.connect(process.env.DB_URL);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

app.use(express.urlencoded({extended: true}));
app.use(express.json());




app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/tags", TagRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
    res.send("hallo");
})

app.listen(process.env.PORT);
