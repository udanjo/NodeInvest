const actionController = require("../controllers/ActionController");

module.exports = (app) => {
  app.post("/action", actionController.post);
  // app.put("/action/:id", ActionController.put);
  // app.delete("/action/:id", ActionController.delete);
  app.get("/action", actionController.getAll);
  app.get("/action/:id", actionController.getById);
};
