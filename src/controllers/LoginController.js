const LoginService = require("../services/LoginService");
const service = new LoginService();

exports.login = async (req, res) => {
  await service.login(req, res);
};
