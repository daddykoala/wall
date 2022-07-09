const express = require('express');
const app = express();
const router = require('./router');

//variable d'environnement
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

const port = process.env.PORT ?? 3000

app.listen(port ,() => {
    console.log(`Example app listening on http://localhost:${port}`);
});