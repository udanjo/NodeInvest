const ActiveController = require("../controllers/ActiveController");

module.exports = (app) => {
  app.get("/active", ActiveController.get);
  app.get("/active/:id", ActiveController.getById);
  app.post("/active", ActiveController.post);
  app.put("/active", ActiveController.put);
  app.delete("/active/:id", ActiveController.delete);
};
