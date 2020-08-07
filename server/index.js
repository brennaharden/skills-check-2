require('dotenv').config();
const express = require('express');
const massive = require('massive')
const ctrl = require('./controller.js')
const app = express();
const port = 4005;

const {CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => console.log(err))

app.use(express.json());

app.get('/api/inventory', ctrl.getInventory)

app.listen(port, () => {
    console.log(`Buzzing in hive ${port}`)
});