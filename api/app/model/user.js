const datamapper = require ("./datamapper");



class User {
    constructor () {}
    super ()

    
    async createUser (body,_) {

        const user = await datamapper.insertUser(body)

    };

};

module.export = User ; 