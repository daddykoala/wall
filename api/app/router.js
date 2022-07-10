const express = require ('express');
const router = express.Router();

//validation des données 
// const { createValidator} = require ('express-joi-validation');
// const validate = createValidator();
const { createValidator }= require ('express-joi-validation');

const valid = createValidator();

//controller
const userController =require('./controller/controller')

//importation des joi.object(schema)
const schema = require ('./schema/form')

router.get('/', function (req, res) {
  res.send('Hello World')
})

router.post('/createuser',valid.body(schema),userController.createUser)

module.exports = router ;






