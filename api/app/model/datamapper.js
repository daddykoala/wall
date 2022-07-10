const Client = require ('../service/dbclient');


const datamapper = {


async insertUser (body, res) {
    console.log('ca passe ici 3');
    const sql = `INSERT INTO public."user"(
        firstname, lastname, email, password)
        VALUES ($1,$2,$3,$4)RETURNING id `;

        values = {

            firstname : body.firstname ,
            lastname : body.lastname ,
            email : body.email ,
            password : body.password ,
        };
        const result = await Client.query(sql,[values.firstname,values.lastname,values.email,values.password]);
        return res.json(result)
    }
    
    }

module.exports = datamapper ;


        
