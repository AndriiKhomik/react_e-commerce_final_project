const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addConfig,
  updateConfig,
  deleteConfig,
  getConfigs,
  getConfigById
} = require("../controllers/globalConfigs");

// @route   POST /configs
// @desc    Create new config
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addConfig
);

// @route   PUT /configs/:customId
// @desc    Update existing config
// @access  Private
router.put(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  updateConfig
);

// @route   DELETE /configs/:customId
// @desc    DELETE existing config
// @access  Private
router.delete(
  "/:customId",
  passport.authenticate("jwt-admin", { session: false }),
  deleteConfig
);

// @route   GET /configs
// @desc    GET existing configs
// @access  Public
router.get("/", getConfigs);

// @route   GET /configs/:customId
// @desc    GET existing configs
// @access  Public
router.get("/:customId", getConfigById);

module.exports = router;
