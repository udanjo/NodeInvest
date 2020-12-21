const Action = require("../models/ActionModel");

class actionService {
  constructor() {}

  async getAll(code, description) {
    try {
      console.log("chegou no service");
      let result = null;
      if (code == null && description == null) {
        console.log("dentro do if");
        result = await Action.findAll();
      } else {
        result = await Action.findAll({
          where: {
            code: code,
          },
        });
      }
      return result;
    } catch (err) {
      return false;
    }
  }

  async post(req) {
    try {
      const { code, description } = req.body;

      Action.create({
        code: code.toUpperCase(),
        description: description,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async getById(id) {
    console.log("id:", id);
    try {
      var result = await Action.findOne({ where: { id: id } });
      console.log("resultado:", result);
      return result;
    } catch (error) {
      return false;
    }
  }
}

module.exports = actionService;
