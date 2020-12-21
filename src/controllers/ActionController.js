// const Action = require("../models/ActionModel");
// const ActionValidator = require("../validators/ActionValidator");
const actionService = require("../services/ActionService");
const service = new actionService();
// exports.get = async (req, res) => {
//   try {
//     const code = req.query.code;
//     const description = req.query.description;

//     let result = null;
//     if (code == null && description == null) {
//       result = await Action.findAll();
//     } else {
//       result = await Action.findAll({ where: { code: code } });
//     }
//     res.status(200).send(result);
//   } catch (err) {
//     res.send(`Erro - ${err}`);
//   }
// };

exports.getAll = async (req, res) => {
  try {
    console.log("chamou o service");
    var result = await service.getAll(req.query.code, req.query.description);
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

exports.getById = async (req, res) => {
  const id = req.params.id;
  var result = await service.getById(id);
  // if (result) {
  res.status(200).send(result);
  // } else {
  //   res.status(400).send(result);
  // }
};

// exports.post = async (req, res) => {
//   try {
//     console.log("chegou aqui no insert");
//     ActionValidator.post(req, res);
//     console.log("passou do validador");
//     const { code, description } = req.body;

//     Action.create({
//       code: code.toUpperCase(),
//       description: description,
//     }).then(() => {
//       res.status(200).send();
//     });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };
