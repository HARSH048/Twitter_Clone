const express = require("express");
const { createTweet, getTweet } = require("../../controller/tweet-controller");
const { toggleLike } = require("../../controller/like-controller");
const { createComment } = require("../../controller/comment-controller");
const { signup, signin } = require("../../controller/user-controller");
const { authenticate } = require("../../middleware/authenticate");
const router = express.Router();

router.post("/tweets", authenticate, createTweet);
router.get("/tweets/:id", getTweet);
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/likes/toggle", toggleLike);
router.post("/comments", authenticate, createComment);

module.exports = router;
