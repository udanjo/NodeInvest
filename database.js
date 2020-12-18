const Sequelize = require("sequelize");

const _connection = new Sequelize("invest", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  operatorAliases: false,
  port: 5433,
  timezone: "-03:00",
});

module.exports = _connection;
