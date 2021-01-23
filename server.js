const express = require("express"); // Importa o pacote
// const expressValidator = require("express-validator");
const cors = require("cors"); // usar segurança cors para requisição
const bodyParser = require("body-parser"); // usado para receber dados por body na request
//const config = require("./src/config/database.js"); // arquivo de configuração
const app = express(); // Instancia ele

//Definindo ambiente do projeto
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

//Força atualização e vinculo do banco de dados
require("./src/database");

// Adiciona politicas Cors
app.use(cors());

// Configurações do BodyParser para receber arquivos
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rota default
app.get("/", (req, res) => {
  res.json({
    message:
      "Seja bem vindo a API " +
      process.env.NAMEAPI +
      " versão " +
      process.env.VERSIONAPI,
  });
});

// obtendo as demais rotas
require("./src/Routes/mapRoutes.js")(app);

// Porta de execução do servidor
app.listen(process.env.PORT_SERVER, () => {
  console.log("Servidor Web está ouvindo na porta " + process.env.PORT_SERVER);
});
