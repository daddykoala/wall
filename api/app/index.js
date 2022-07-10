const express = require('express');
const app = express();
const router = require('./router');
const dotenv = require('dotenv');



//variable d'environnement
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT ?? 3000
dotenv.config()

app.use(router);


app.listen(port ,() => {
    console.log(`Example app listening on http://localhost:${port}`);
});