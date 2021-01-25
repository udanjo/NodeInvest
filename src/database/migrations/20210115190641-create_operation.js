"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable("i_operacao", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comments: "Tipo de operação (1-compra/2-venda)",
        field: "tipo",
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comments: "quantidade usada na operação",
        field: "quantidade",
      },
      valueUnit: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        comments: "Valor unitário",
        field: "vlrUnitario",
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true,
        comments: "Observação",
        field: "observacao",
      },
      activeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comments: "Ativo utilizado",
        field: "ativoId",
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable("i_operacao");
  },
};
