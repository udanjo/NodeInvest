const OperationModel = require("../models/OperationModel");

class OperationService {
  constructor() {}

  async get(req) {
    try {
      let result = null;
      if (req.query.activeId == null) {
        result = await OperationModel.findAll();
      } else {
        result = await OperationModel.findAll({
          where: {
            activeId: req.query.activeId,
          },
          order: [["id"]],
        });
      }
      return result;
    } catch (err) {
      return null;
    }
  }

  async post(req) {
    try {
      const { type, activeId, count, valueUnit, note } = req.body;

      const result = await OperationModel.create({
        type: type,
        activeId: activeId,
        count: count,
        valueUnit: valueUnit,
        note: note,
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = OperationService;
