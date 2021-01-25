"use strict";

module.exports = {
  up: async (queryInterface, DataTypes) => {
    return await queryInterface.addConstraint("i_ativo", {
      fields: ["codigo"],
      type: "unique",
      name: "uniq_code",
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
