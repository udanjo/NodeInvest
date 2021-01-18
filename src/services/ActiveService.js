const ActiveModel = require("../models/ActiveModel");

class ActiveService {
  constructor() {}

  async get(req) {
    try {
      let result = null;
      if (req.query.code == null && req.query.description == null) {
        result = await ActiveModel.findAll();
      } else {
        result = await ActiveModel.findAll({
          where: {
            code: code,
          },
        });
      }

      return result;
    } catch (err) {
      return null;
    }
  }

  async post(req) {
    try {
      const { code, description } = req.body;

      let result = ActiveModel.create({
        code: code.toUpperCase(),
        description: description.toUpperCase(),
      });

      return true;
    } catch (error) {
      return false;
    }
  }

  async getById(id) {
    try {
      return await ActiveModel.findByPk(id);
    } catch (error) {
      return false;
    }
  }

  async put(req) {
    try {
      const { id, code, description } = req.body;

      await ActiveModel.update(
        {
          code: code.toUpperCase(),
          description: description.toUpperCase(),
        },
        {
          where: { id: id },
        }
      );

      return true;
    } catch (error) {
      return false;
    }
  }

  async delete(id) {
    try {
      await ActiveModel.destroy({ where: { id: id } });
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = ActiveService;
