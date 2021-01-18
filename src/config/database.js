//const Sequelize = require("sequelize");

// module.exports = new Sequelize("invest", "postgres", "postgres", {
//   host: "localhost",
//   dialect: "postgres",
//   quoteIdentifiers: false,
//   operatorAliases: false,
//   port: 5433,
//   define: {
//     timestamps: true,
//     underscored: true,
//   },
//   //timezone: "-03:00",
// });

module.exports = {
  username: "postgres",
  password: "postgres",
  database: "invest",
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  operatorAliases: false,
  port: 5433,
  define: {
    timestamps: true,
    underscored: true,
  },
  //timezone: "-03:00",
};
