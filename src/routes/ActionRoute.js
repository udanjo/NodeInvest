const ActionController = require("../controllers/ActionController");
const ActionValidator = require("../validators/ActionValidator");

module.exports = (app) => {
  app.post("/action", ActionValidator.post, ActionController.post);
  // app.put("/action/:id", ActionController.put);
  // app.delete("/action/:id", ActionController.delete);
  app.get("/action", ActionController.get);
  app.get("/action/:id", ActionController.getById);
};
