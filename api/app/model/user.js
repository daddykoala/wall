const datamapper = require ("./datamapper");



class User {

    firstname;
    lastname;
    email;
    password;

    constructor (obj) {

    this.firstname = obj.firstname;
    this.lastname = obj.lastname;
    this.email = obj.email;
    this.password = obj.password;

    }
    super ()

    async create (obj, res) {

        const body = obj ;

        const user = await datamapper.insertUser(body)

    };

};

    

module.exports = User ; 