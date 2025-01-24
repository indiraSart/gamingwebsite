const express = require("express");
const router = express.Router();

const gameController = require("../controllers/gameController.js")

router.get("/", gameController.getAllGame);
router.post("/", gameController.createGame);

router.get("/:id", gameController.getGame);
router.put("/:id", gameController.editGame);
router.delete("/:id", gameController.deleteGame);

module.exports = router;

