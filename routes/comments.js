const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addComment,
  updateComment,
  deleteComment,
  getComments,
  getCustomerComments,
  getProductComments
} = require("../controllers/comments");

// @route   POST /comments
// @desc    Add new comments
// @access  Private
router.post("/", passport.authenticate("jwt", { session: false }), addComment);

// @route   PUT /comments/:id
// @desc    Update existing comment
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateComment
);

// @route   DELETE /comments/:id
// @desc    Delete existing comment
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteComment
);

// @route   GET /comments
// @desc    GET existing comments
// @access  Public
router.get("/", getComments);

// @route   GET /comments/:customerId
// @desc    GET existing comments of particular customer
// @access  Public
router.get("/customer/:customerId", getCustomerComments);

// @route   GET /comments/:productId
// @desc    GET existing comments of particular product
// @access  Public
router.get("/product/:productId", getProductComments);

module.exports = router;
