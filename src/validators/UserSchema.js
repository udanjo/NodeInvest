const Joi = require("joi");

const UserSchema = {
  UserPost: Joi.object().keys({
    name: Joi.string().required().min(1).max(250),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(6),
  }),
  UserGet: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = UserSchema;
