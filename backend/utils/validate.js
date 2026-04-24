const Joi = require("joi");

exports.validateAuth = (data)=>{
  return Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(6).required()
  }).validate(data);
};