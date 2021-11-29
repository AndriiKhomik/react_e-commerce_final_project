const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  addCategory,
  aupdateCategory,
  deleteCategory,
  getCategories,
  getCategory
} = require("../controllers/catalog");

// @route   POST /catalog
// @desc    Create new category
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addCategory
);

// @route   PUT /catalog/:id
// @desc    Update existing category
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  aupdateCategory
);

// @route   DELETE /catalog/:id
// @desc    Delete existing category
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteCategory
);

// @route   GET /catalog
// @desc    GET existing categories
// @access  Public
router.get("/", getCategories);

// @route   GET /catalog/:id
// @desc    GET existing categorie
// @access  Public
router.get("/:id", getCategory);

module.exports = router;
