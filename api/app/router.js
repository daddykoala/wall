const express = require ('express');
const router = express.Router();

//validation des données 
// const { createValidator} = require ('express-joi-validation');
// const validate = createValidator();
const valid= require ('express-joi-validation').createValidator();
//controller
const userController =require('./controller/controller')

//importation des joi.object(schema)
const {schema} = require ('./schema/form')








router.get('/', function (req, res) {
  res.send('Hello World')
})
router.post('/createuser',valid(schema),userController.createUser())

module.export = router ;