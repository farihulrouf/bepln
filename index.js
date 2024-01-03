require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

//const routes = require('./routes/routes');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');
//app.use('/api', routes)
app.use('/customers', customers)
app.use('/transactions', transactions)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})