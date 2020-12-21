const Sequelize = require("sequelize");
const db = require("../../database");

const action = db.define(
  "iacao",
  {
    code: {
      type: Sequelize.STRING(5),
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

action.sync({ force: false }).then(() => {});

module.exports = action;
