"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      // Define associations if any
    }
  }
  Location.init(
    {
      location_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      average_rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      // other properties as needed
    },
    {
      sequelize,
      modelName: "Location",
      tableName: "location", // Ensure this matches your actual table name
      underscored: true, // Use snake_case for column names
    }
  );

  return Location;
};
