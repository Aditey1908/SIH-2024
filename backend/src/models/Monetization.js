module.exports = (sequelize, DataTypes) => {
    const Monetization = sequelize.define('Monetization', {

      start_location: DataTypes.STRING,
      end_location: DataTypes.STRING,
      space_required: DataTypes.INTEGER,
    },
    {
      timestamps: false
    });
  
    return Monetization;
  };
  