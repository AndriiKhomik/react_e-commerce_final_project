const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addAuthor,
  getAuthors,
  getAuthorById
} = require("../controllers/authors");

// @route   POST /authors
// @desc    Add new author
// @access  Private
router.post("/", passport.authenticate("jwt", { session: false }), addAuthor);


// @route   GET /authors
// @desc    GET existing authors
// @access  Public
router.get("/", getAuthors);


// @route   GET /authors/:id
// @desc    GET existing author by id
// @access  Public
router.get("/:id", getAuthorById);

module.exports = router;