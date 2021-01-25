const Joi = require("joi");

const LoginSchema = {
  Login: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(6),
  }),
};

module.exports = LoginSchema;
