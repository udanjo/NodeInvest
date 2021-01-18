const ActiveService = require("../services/ActiveService");

const service = new ActiveService();

exports.get = async (req, res) => {
  try {
    var result = await service.get(req);
    res.status(200).send(result);
  } catch (err) {
    res.send(`Erro - ${err}`);
  }
};

exports.post = async (req, res) => {
  var result = await service.post(req);
  if (result == true) {
    res.status(200).send(result);
  } else {
    res.status(400).send(result);
  }
};

exports.put = async (req, res) => {
  var result = await service.put(req);
  if (result == true) {
    res.status(200).send(result);
  } else {
    res.status(400).send(result);
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  var result = await service.delete(id);
  if (result == true) {
    res.status(200).send(result);
  } else {
    res.status(400).send(result);
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  var result = await service.getById(id);
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(400).send(result);
  }
};
