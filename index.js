require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const con = require('./config/condb');
//const mongoString = process.env.DATABASE_URL;

//mongoose.connect(mongoString);
/*
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
*/

const app = express();
app.use(cors())
app.use(express.json());

const customers = require('./routes/customers')
const transactions = require('./routes/transactions')
const users = require('./routes/users')

app.use('/customers', customers)
app.use('/transactions', transactions)
app.use('/users', users)


//app.use('/users', users)
app.listen(PORT, () => {
    //console.log(`Server Started at ${3000}`)
})

module.exports = app