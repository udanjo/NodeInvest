const UserController = require("../controllers/UserController");
const validator = require("../validators/ValidatorHelper");
const UserSchema = require("../validators/UserSchema");

module.exports = (app) => {
  app.get("/user", UserController.get);
  app.post(
    "/user",
    validator(UserSchema.UserPost, "body"),
    UserController.post
  );
};
