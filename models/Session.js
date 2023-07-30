const { sequelize, DataTypes } = require("../connection");

const Session = sequelize.define("session", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  session: {
    type: DataTypes.STRING,
    defaultValue: null,
  },
  is_active: {
    type: DataTypes.ENUM("yes", "no"),
    defaultValue: "no",
  },
});

Session.sync({ alter: true });
module.exports = Session;
