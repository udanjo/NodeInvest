const Sequelize = require("sequelize");
const db = require("../../database");
const action = require("./ActionModel");

const operation = db.define(
  "ioperacao",
  {
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "Tipo da Operação (1-Compra/2-Venda)",
      field: "tipo",
    },
    // actionId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   comment: "Ativo da Operação",
    //   field: "acaoId",
    // },
    count: {
      type: Sequelize.INTEGER,
      allowNull: false,
      comment: "quantidade da Operação",
      field: "quantidade",
    },
    valueUnit: {
      type: Sequelize.DOUBLE,
      allowNull: false,
      comment: "Valor Unitário da Operação",
      field: "vlrUnitario",
    },
    note: {
      type: Sequelize.TEXT,
      allowNull: true,
      comment: "Observação da operação",
      fiel: "observacao",
    },
  },
  {
    tableName: "i_operation",
    freezeTableName: false,
  }
);

operation.belongsTo(action, {
  as: "i_acao",
  through: "acao_operation",
  foreignKey: "actionId",
});
operation.sync({ force: false }).then(() => {});

module.exports = operation;
