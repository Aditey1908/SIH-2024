module.exports = (sequelize, DataTypes) => {
    const MasterDatabase = sequelize.define('MasterDatabase', {
      truck_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      route_id: DataTypes.INTEGER,
      start_location: DataTypes.STRING,
      end_location: DataTypes.STRING,
      est_departure: DataTypes.DATE,
      est_arrival: DataTypes.DATE,
    },
    {
      timestamps: false
    });
  
    return MasterDatabase;
  };
  