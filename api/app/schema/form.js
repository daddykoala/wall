const Joi = require ('joi');
//const pattern = require ('./regex');




console.log('ca passe ici 2')
const schema = Joi.object({
firstname :Joi.string(),
lastname : Joi.string(),
email : Joi.string().pattern(new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)),
password : Joi.string()
}).required().min(1);

module.exports = schema;