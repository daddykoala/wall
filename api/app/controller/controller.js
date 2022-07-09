const  User = require ('../model/user');

const userController ={

    async createUser (body,res) {

        console.log(body);
        const result = await User.createUser(body);
        return res.json(result)
    }


}
module.export = {createUser} ;