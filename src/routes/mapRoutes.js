const OperationRoute = require("./OperationRoute");
const ActiveRoute = require("./ActiveRoute");
const UserRoute = require("./UserRoute");

module.exports = (app) => {
  OperationRoute(app);
  ActiveRoute(app);
  UserRoute(app);
};

//----------------------------------------- exemplos

// const express = require("express"); // Importa o pacote
// const app = express(); // Instancia ele
// const cors = require("cors"); // usar segurança cors para requisição
// // const actionModel = require("./src/db/models/ActionModel");
// // const db = require("./src/db/database");
// const service = require("./src/api/services/actionService");
// const action = require("./src/db/models/ActionModel");

// // Adiciona politicas Cors
// app.use(cors());

// // rota de GET
// app.get("/acao", (req, res) => {
//   setTimeout(() => {
//     var result = service.get();
//     res.send(result);
//   }, true);
// });

// //rota de valor
// app.get("/", (req, res) => {
//   res.send("Seja bem-vindo!");
// });

// //Grava Cielo
// app.get("/cielo", (req, res) => {
//   // actionModel
//   //   .create({
//   //     code: "CIEL3",
//   //     description: "CIELO SA",
//   //   })
//   //   .then(() => {
//   //     res.redirect("/");
//   //   });
//   // res.send("CIELO - GRAVADA");
//   //const result = actionService.cre
//   res.send("CIELO - GRAVADA");
// });

// app.listen(5002); // Porta de execução do servidor
