// routes/monetizationRoutes.js
const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/monetizationController');

// POST route to handle booking creation
router.post('/create-booking', createBooking);

module.exports = router;
