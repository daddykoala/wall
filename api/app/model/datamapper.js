
const datamapper = {


async insertUser (body) {

    const sql = `INSERT INTO public."user"(
        firstname, lastname, email, password)
        VALUES ($1,$2,$3,$4)`;

        values = {

            firstname : body.fistname ,
            lastname : body.lastname ,
            email : body.email ,
            password : body.password ,
        };
        const result = await client.query(sql,[values]);
        return res.json(result)
    }
    
    
    }

module.export = datamapper ;


        
