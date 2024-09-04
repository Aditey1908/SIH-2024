const { TruckStatus } = require('../models');

// Fetch Truck Status
exports.getTruckStatus = async (req, res) => {
  try {
    const { truckId } = req.params;
    const status = await TruckStatus.findAll({ where: { truck_id: truckId } });
    res.json(status);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching truck status', error });
  }
};
