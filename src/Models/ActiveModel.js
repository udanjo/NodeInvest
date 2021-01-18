const { Model, DataTypes } = require("sequelize");

class ActiveModel extends Model {
  static init(sequelize) {
    super.init(
      {
        code: {
          type: DataTypes.STRING(5),
          field: "codigo",
        },
        description: {
          type: DataTypes.STRING(150),
          field: "descricao",
        },
      },
      {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        tableName: "i_ativo",
      }
    );
  }
}

module.exports = ActiveModel;
