const express = require('express');
const router = express.Router();
const routeController = require('../controllers/routeController');

router.get('/:routeId', routeController.getRouteData);

module.exports = router;
