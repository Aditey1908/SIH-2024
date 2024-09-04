module.exports = (sequelize, DataTypes) => {
    const TruckStatus = sequelize.define('TruckStatus', {
      truck_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      total_capacity: DataTypes.INTEGER,
      route_id: DataTypes.INTEGER,
      updated_at: DataTypes.DATE,
      last_location: DataTypes.STRING,
      current_location: DataTypes.STRING,
      next_location: DataTypes.STRING,
      timeAt_last: DataTypes.DATE,
      timeAt_next: DataTypes.DATE,
      timeAt_current: DataTypes.DATE,
    },
      {
        timestamps: false
      });
  
    return TruckStatus;
  };
  