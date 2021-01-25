const { Model, DataTypes } = require("sequelize");
const crypto = require("crypto");

class UserModel extends Model {
  static init(sequelize) {
    super.init(
      {
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
          //Set: (value) => crypto.createHash("md5").update(value).digest("hex"),
        },
      },
      {
        sequelize,
        // modelName: 'i_usuario',
        freezeTableName: true,
        timestamps: false,
        tableName: "i_usuario",
      }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        let password = user.password;
        user.password = crypto.createHash("md5").update(password).digest("hex");
      }
    });
    return this;
  }

  // static associate(models) {
  //   this.hasMany(models.Action, { foreignKey: 'user_id', as: 'actions' });
  //   this.belongsTo(models.operation, { foreignKey: 'user_id', through: 'user_operation', as: 'techs' });
  // }
}
module.exports = UserModel;

// module.exports = (sequelize, DataTypes) => {
//   const UserModel = sequelize.define("i_usuario", {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//   });
//   return UserModel;
// };
