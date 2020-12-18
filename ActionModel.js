const Sequelize = require("sequelize");
const db = require("../../database");
const operation = require("./OperationModel");

const action = db.define(
  "i_acao",
  {
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Código do Ativo",
      field: "codigo",
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      comment: "Nome do Ativo",
      field: "descricao",
    },
  },
  {
    tableName: "i_acao",
    freezeTableName: false,
  }
);

// action.hasMany(operation);
action.sync({ force: true }).then(() => {});

module.exports = action;
