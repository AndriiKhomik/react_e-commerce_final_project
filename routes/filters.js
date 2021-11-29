const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addFilter,
  updateFilter,
  deleteFilter,
  getFilters,
  getFiltersByType
} = require("../controllers/filters");

// @route   POST /filters
// @desc    Create new filter
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addFilter
);

// @route   PUT /filters/:id
// @desc    Update existing filter
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateFilter
);

// @route   DELETE /filters/:id
// @desc    DELETE existing filter
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteFilter
);

// @route   GET /filters
// @desc    GET existing filters
// @access  Public
router.get("/", getFilters);

// @route   GET /filters/:type
// @desc    GET existing filters by "type" field
// @access  Public
router.get("/:type", getFiltersByType);

module.exports = router;
