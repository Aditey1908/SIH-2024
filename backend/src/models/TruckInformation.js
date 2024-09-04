module.exports = (sequelize, DataTypes) => {
    const TruckInformation = sequelize.define('TruckInformation', {
      truck_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      total_capacity: DataTypes.INTEGER,
    },
    {
      timestamps: false
    });
  
    return TruckInformation;
  };
  