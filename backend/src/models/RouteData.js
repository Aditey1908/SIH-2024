module.exports = (sequelize, DataTypes) => {
    // Define the RouteData model
    const RouteData = sequelize.define('RouteData', {
      route_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      node_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      time_at_node: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      timestamps: false
    });
  
    return RouteData; // Make sure to return the defined model here
  };
  