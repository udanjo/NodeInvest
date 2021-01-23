const ActiveController = require("../controllers/ActiveController");
const ActiveSchema = require("../validators/ActiveSchema");
const validator = require("../validators/ValidatorHelper");

module.exports = (app) => {
  app.get("/active", ActiveController.get);
  app.get("/active/:id", ActiveController.getById);
  app.post(
    "/active",
    validator(ActiveSchema.ActivePost, "body"),
    ActiveController.post
  );
  app.put("/active", ActiveController.put);
  app.delete("/active/:id", ActiveController.delete);
};
