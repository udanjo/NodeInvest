const userService = require("../services/UserService");

const service = new userService();

exports.get = async (req, res) => {
  try {
    var result = await service.get(req);
    res.status(200).send(result);
  } catch (error) {
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
