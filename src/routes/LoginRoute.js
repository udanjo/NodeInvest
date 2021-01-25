const LoginController = require("../controllers/LoginController");
const LoginSchema = require("../validators/LoginSchema");
const validator = require("../validators/ValidatorHelper");

module.exports = (app) => {
  app.post(
    "/login",
    validator(LoginSchema.Login, "body"),
    LoginController.login
  );
};
