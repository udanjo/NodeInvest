const OperationService = require("../services/OperationService");
// const TypeOperationEnum = require("../models/enums/TypeOperationEnum");

const service = new OperationService();

exports.get = async (req, res) => {
  try {
    let result = await service.get(req);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(`Erro - ${err}`);
  }
};

exports.post = async (req, res) => {
  try {
    var result = await service.post(req);
    if (result == true) {
      res.status(200).send(result);
    } else {
      res.status(400).send(result);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};
