const express = require("express");
const router = express.Router();
const auth = require("../../middelwares/verifyToken")
router.post("/register", require("./register") );
router.post("/login", require("./login") );
router.put("/verifyEmail", require("./verifyEmail") );
router.get("/books", auth , require("./getBooks"));
router.get("/book/:id", auth, require("./getBook"));
router.post("/addReview/:bookId", auth, require("./addReview"));
router.put("/updateReview/:reviewId", auth, require("./updateReview"));
router.delete("/deleteReview/:reviewId", auth, require("./deleteReview"));
router.get("/reviews/:id", auth, require("./getReviews"));
module.exports = router;



