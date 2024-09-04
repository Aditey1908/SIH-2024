const { RouteData } = require('../models');

// Fetch Route Data
exports.getRouteData = async (req, res) => {
  try {
    const { routeId } = req.params;
    const routeData = await RouteData.findAll({ where: { route_id: routeId } });
    res.json(routeData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching route data', error });
  }
};
