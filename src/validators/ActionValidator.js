const validator = require("validator");
var  {addMessage, resultErrors} = require("../validators/errorBase");

exports.post = (req, res, next) => {
  const { code, description } = req.body;

   console.log('Codigo', code);
  //Valida se houve algum erro
  if (validator.isEmpty(code)) {
    addMessage("Código é campo obrigatório!");
  }

  console.log('Descrição', description);
  if (validator.isEmpty(description)) {
    addMessage("Descrição é campo obrigatório!");
  }
  //   req.checkBody("code", "Código é campo obrigatório!").notEmpty();
  //   req.checkBody("description", "Descrição é campo obrigatório!").notEmpty();
  //   req
  //     .checkBody(
  //       "description",
  //       "Não é permitido inserir descrição maior que 255 Caracteres!"
  //     )
  //     .isLength({
  //       min: 5,
  //       max: 255,
  //     });
  console.log("entrou no erro", resultErrors[0]);
  if (resultErrors.length > 0) {
    //const firstError = errors.map((error) => error)[0];
    console.log("entrou no erro");
    //   return res.status(400).json({ error: firstError });
    return res.status(400).json({ resultErrors });
  }
};
