const express = require("express");
const router = express.Router();
const authController = require("../controllers/authcontroller.js")
const verifyJwt = require("../middleware/verifyToken.js");


console.log("hello");
router.post("/login", authController.login);
router.post("/register", authController.register)
router.get("user", authController.user)
router.get("/user", verifyJwt, authController.user)

module.exports = router;