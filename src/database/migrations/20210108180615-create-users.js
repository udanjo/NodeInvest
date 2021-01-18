"use strict";

const { QueryInterface, where } = require("sequelize");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("i_usuario", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(250),
        field: "Nome",
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(250),
        unique: true,
        field: "Email",
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(6),
        field: "Senha",
      },
    });
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable("i_usuario");
  },
};
