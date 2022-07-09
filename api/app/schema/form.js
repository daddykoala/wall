const Joi = require ('joi');
const pattern = require ('pattern')



const schema = Joi.object({
firstname :Joi.string(),
lastname : Joi.string(),
mail : Joi.string().regex(pattern.patternMail),
password : Joi.string()
}).required().min(1);

module.export = schema;