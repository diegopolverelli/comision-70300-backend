// const { Sequelize, DataTypes } = require('sequelize');
import { sequelize } from "../../connDB.js";
import {DataTypes} from "sequelize"
// const sequelize = new Sequelize('sqlite::memory:');

export const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    age: {
        type: DataTypes.INTEGER,
    }
  },
  {
    // Other model options go here
    timestamps: true
  },
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true