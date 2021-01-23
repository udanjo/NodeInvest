const Joi = require("joi");

const ActiveSchema = {
  ActivePost: Joi.object().keys({
    code: Joi.string().required().min(5),
    description: Joi.string().required().max(250),
  }),
  ActiveGet: Joi.object().keys({
    code: Joi.string().required(),
  }),
};

module.exports = ActiveSchema;
