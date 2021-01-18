const { Model, DataTypes } = require("sequelize");

class OperationModel extends Model {
  static init(sequelize) {
    super.init(
      {
        type: {
          type: DataTypes.INTEGER,
          field: "tipo",
        },
        count: {
          type: DataTypes.INTEGER,
          field: "quantidade",
        },
        valueUnit: {
          type: DataTypes.DOUBLE,
          field: "vlrUnitario",
        },
        note: {
          type: DataTypes.TEXT,
          field: "observacao",
        },
        activeId: {
          type: DataTypes.INTEGER,
          field: "ativoId",
        },
      },
      {
        sequelize,
        tableName: "i_operation",
        freezeTableName: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.ActiveModel, {
      foreignKey: "ativoId",
      as: "ativo",
    });
  }
}

// const operation = db.define(
//   "ioperacao",
//   {
//     type: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       comment: "Tipo da Operação (1-Compra/2-Venda)",
//       field: "tipo",
//     },
//     // actionId: {
//     //   type: Sequelize.INTEGER,
//     //   allowNull: false,
//     //   comment: "Ativo da Operação",
//     //   field: "acaoId",
//     // },
//     count: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       comment: "quantidade da Operação",
//       field: "quantidade",
//     },
//     valueUnit: {
//       type: Sequelize.DOUBLE,
//       allowNull: false,
//       comment: "Valor Unitário da Operação",
//       field: "vlrUnitario",
//     },
//     note: {
//       type: Sequelize.TEXT,
//       allowNull: true,
//       comment: "Observação da operação",
//       fiel: "observacao",
//     },
//   },
//   {
//     tableName: "i_operation",
//     freezeTableName: false,
//   }
// );

module.exports = OperationModel;
