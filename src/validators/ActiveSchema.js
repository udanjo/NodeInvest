const Joi = require("joi");

const ActiveSchema = {
  ActivePost: Joi.object().keys({
    code: Joi.string().required().min(5),
    description: Joi.string().required().max(250),
  }),
  ActivePut: Joi.object().keys({
    id: Joi.number().required().unsafe(),
    code: Joi.string().required().min(5),
    description: Joi.string().required().max(250),
  }),
};

module.exports = ActiveSchema;
