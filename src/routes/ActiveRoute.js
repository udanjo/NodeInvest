const ActiveController = require("../controllers/ActiveController");
const ActiveSchema = require("../validators/ActiveSchema");
const validator = require("../validators/ValidatorHelper");
const { auth } = require("../middleware/AuthenticateHelper.js");

module.exports = (app) => {
  app.get("/active", ActiveController.get);
  app.get("/active/:id", auth, ActiveController.getById);

  app.post(
    "/active",
    auth,
    validator(ActiveSchema.ActivePost, "body"),
    ActiveController.post
  );

  app.put(
    "/active",
    auth,
    validator(ActiveSchema.ActivePut, "body"),
    ActiveController.put
  );

  app.delete("/active/:id", ActiveController.delete);
};
