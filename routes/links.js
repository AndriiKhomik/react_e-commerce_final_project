const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addLinks,
  updateLinks,
  deleteLinks,
  getLinks,
  getLink
} = require("../controllers/links");

// @route   POST /links
// @desc    Create new links or links
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addLinks
);

// @route   PUT /links/:id
// @desc    Update existing links
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateLinks
);

// @route   DELETE /links/:id
// @desc    DELETE existing links
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteLinks
);

// @route   GET /links
// @desc    GET existing links
// @access  Public
router.get("/", getLinks);

// @route   GET /links/:id
// @desc    GET link by id
// @access  Public
router.get("/:id", getLink);

module.exports = router;
