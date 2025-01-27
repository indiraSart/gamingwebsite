const express = require("express");
const router = express.Router();

const tagController = require("../controllers/TagController");

router.get("/", tagController.getAllTags);
router.put("/", tagController.updateTag)
router.delete("/:id", tagController.deleteTag)

// router.post("/", tagController.createTag)
// router.delete("/:id", tagController.deleteTag)

module.exports = router;