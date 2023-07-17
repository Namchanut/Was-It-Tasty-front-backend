const express = require("express");
const router = express.Router();
const contentController = require("../controllers/content-controller");

router.get("/getcontent", contentController.getAllContent);
router.get("/:id", contentController.getContentById);
router.post("/addcontent", contentController.createContent);
router.delete("/:id", contentController.deleteContent);
router.patch("/:id", contentController.updateContent);

module.exports = router;
