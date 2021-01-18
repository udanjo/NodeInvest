const Sequelize = require("sequelize");
const config = require("../config/database.js");

const UserModel = require("../models/UserModel");
const ActiveModel = require("../models/ActiveModel");
const OperationModel = require("../models/OperationModel");

const conn = new Sequelize(config);

UserModel.init(conn);
ActiveModel.init(conn);
OperationModel.init(conn);

//UserModel.associate(conn.models);
OperationModel.associate(conn.models);

module.exports = conn;
