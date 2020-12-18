const OperationController = require("../controllers/OperationController");

module.exports = (app) => {
  app.get("/operation", OperationController.get);
  app.post("/operation", OperationController.post);
};
