const Joi = require("joi");

const validator = (schema, property) => {
  return (req, res, next) => {
    //const { error } = Joi.validate(req[property], schema);
    const { error } = schema.validate(req[property]);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      //const message = error.details.map((i) => i.message).Joi(",");
      const message = MessageError(error);
      res.status(400).json({ error: message });
    }
  };
};

module.exports = validator;

function MessageError(error) {
  let err = error.details[0].type;
  let property = error.details[0].path[0];
  let message = error.details[0].message;

  switch (err) {
    case "string.requerid":
    case "string.empty":
      message = `${property} é campo de preenchimento obrigatório`;
      break;
    case "string.min":
      message = `${property} informa a quantidade minima de caracteres!`;
      break;
    case "string.max":
      message = `${property} ultrapasso a quantidade maxima de caracteres!`;
      break;
    case "string.email":
      message = `${property} informado é invalido!`;
      break;
    default:
      break;
  }
  return message;
}
