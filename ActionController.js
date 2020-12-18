const Action = require("../models/ActionModel");
const ActionValidator = require("../validators/ActionValidator");

exports.get = async (req, res) => {
  try {
    const code = req.query.code;
    const description = req.query.description;

    let result = null;
    if (code == null && description == null) {
      result = await Action.findAll();
    } else {
      result = await Action.findAll({ where: { code: code } });
    }
    res.status(200).send(result);
  } catch (err) {
    res.send(`Erro - ${err}`);
  }
};

exports.getById = async (req, res) => {
  try {
    const id = req.params.id;

    let result = await Action.findOne({ where: { id: id } });
    if (result != null) {
      res.status(200).send(result);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.send(`Erro - ${error}`);
  }
};

exports.getByCode = async (req, res) => {
  try {
    const code = req.query.code;
    //const description = re.query.description;

    let result = await Action.findAll({ where: { code: code } });
    if (result != null) {
      res.status(200).send(result);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.send(`Erro - ${error}`);
  }
};

exports.post = async (req, res) => {
  try {
    console.log("chegou aqui no insert");
    ActionValidator.post(req, res);
    console.log("passou do validador");
    const { code, description } = req.body;

    Action.create({
      code: code,
      description: description,
    }).then(() => {
      res.status(200).send();
    });
  } catch (error) {
    res.status(400).send(error);
  }
};
