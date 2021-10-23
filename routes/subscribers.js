const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addSubscriber,
  updateSubscriberById,
  updateSubscriberByEmail,
  getSubscribers,
  getSubscriber
} = require("../controllers/subscribers");

// @route   POST /subscribers
// @desc    Create new subscriber
// @access  Private
router.post("/", addSubscriber);

// @route   PUT /subscribers/:id
// @desc    Update existing subscriber by object id
// @access  Private
router.put("/:id", updateSubscriberById);

// @route   PUT /subscribers/:email
// @desc    Update existing subscriber by email
// @access  Private
router.put("/email/:email", updateSubscriberByEmail);

// @route   GET /subscribers
// @desc    GET existing subscribers
// @access  Public
router.get("/", getSubscribers);

// @route   GET /subscribers/:id
// @desc    GET existing subscribers
// @access  Public
router.get("/:email", getSubscriber);

module.exports = router;
