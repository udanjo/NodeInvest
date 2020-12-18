const Operation = require("../models/OperationModel");
const TypeOperationEnum = require("../models/enums/TypeOperationEnum");

exports.get = async (req, res) => {
  try {
    let result = await Operation.findAll();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(`Erro - ${err}`);
  }
};

exports.post = async (req, res) => {
  try {
    const { type, actionId, count, valueUnit, note } = req.body;
    Operation.create({
      type: type,
      actionId: actionId,
      count: count,
      valueUnit: valueUnit,
      note: note,
    });
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
