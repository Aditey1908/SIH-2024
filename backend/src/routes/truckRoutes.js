const express = require('express');
const router = express.Router();
const truckController = require('../controllers/truckController');

router.get('/status/:truckId', truckController.getTruckStatus);

module.exports = router;
