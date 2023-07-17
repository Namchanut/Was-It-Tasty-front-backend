const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment-controller");

router.post("/addcomment", commentController.createComment);

module.exports = router;
