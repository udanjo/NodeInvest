const express = require("express"); // Importa o pacote
// const expressValidator = require("express-validator");
const cors = require("cors"); // usar segurança cors para requisição
const bodyParser = require("body-parser"); // usado para receber dados por body na request
const config = require("./configs/config.js"); // arquivo de configuração
const app = express(); // Instancia ele

// Adiciona politicas Cors
app.use(cors());

// Configurações do BodyParser para receber arquivos
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// adcionando o uso do ExpressValidador
//app.use(expressValidator());
// app.use(
//   expressValidator({
//     errorFormatter: function (param, msg, value) {
//       var namespace = param.split("."),
//         root = namespace.shift(),
//         formParam = root;

//       while (namespace.length) {
//         formParam += "[" + namespace.shift();
//       }
//       return {
//         param: formParam,
//         msg: msg,
//         value: value,
//       };
//     },
//   })
// );

// rota default /
app.get("/", (req, res) => {
  res.json({
    message:
      "Seja bem vindo a API " + config.nomeAPI + " versão " + config.versaoAPI,
  });
});

// obtendo as demais rotas
require("./src/Routes/index")(app);

// Porta de execução do servidor
app.listen(config.portaServidor, () => {
  console.log("Servidor Web está ouvindo na porta " + config.portaServidor);
});
