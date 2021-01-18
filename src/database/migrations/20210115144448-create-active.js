"use strict";

const { QueryInterface, where } = require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return queryInterface.createTable("i_ativo", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING(6),
        allowNull: false,
        comments: "Código do Ativo",
        field: "codigo",
      },
      description: {
        type: DataTypes.STRING(250),
        allowNull: false,
        comments: "Descrição do Ativo",
        field: "descricao",
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable("i_ativo");
  },
};
