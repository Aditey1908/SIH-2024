const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];

// Initialize Sequelize with the correct configuration
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: console.log, // Optional: Enable SQL query logging for debugging
  }
);

const db = {};

// Initialize models without requiring them in the middle of model definitions
db.Sequelize = Sequelize; // Export Sequelize constructor
db.sequelize = sequelize; // Export the Sequelize instance

// Import models
db.MasterDatabase = require('./MasterDatabase')(sequelize, Sequelize);
db.TruckStatus = require('./TruckStatus')(sequelize, Sequelize);
db.RouteData = require('./RouteData')(sequelize, Sequelize);
db.TruckInformation = require('./TruckInformation')(sequelize, Sequelize);
db.Monetization = require('./Monetization')(sequelize, Sequelize);

// Export the db object containing all models and the Sequelize instance
module.exports = db;
