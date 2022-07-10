//const  User = require ('../model/user');
const datamapper = require ('../model/datamapper')

const userController ={

    async createUser (req,res) {
        const body =req.body

        console.log(body);
        //const result = new User.create(body);
        const result = await datamapper.insertUser(body)
        return res.json(result)
    }


}
module.exports =  userController ;