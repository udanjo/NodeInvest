const UserModel = require("../models/UserModel");

class UserService {
  constructor() {}

  async get(req) {
    try {
      let result = null;
      if (req.query.name == null && req.query.email == null) {
        result = await UserModel.findAll();
      } else {
        result = await UserModel.findAll({
          where: {
            name: req.query.name,
          },
          order: [["nome"]],
        });
      }
      return result;
    } catch (err) {
      return null;
    }
  }

  async post(req) {
    try {
      const { name, email, password } = req.body;

      let result = await UserModel.create({
        name: name.toUpperCase(),
        email: email,
        password: password,
      });

      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = UserService;
