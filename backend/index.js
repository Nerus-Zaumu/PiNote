require('dotenv').config();
const express = require('express');
const http = require('http');
const connection = require('../backend/db/init');
const router = require('./routes/user');
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use('/api/v1.0', router);
PORT = process.env.PORT || 5000;

const server = http.createServer(app)


const start = async () => {
    try {
        await connection(process.env.MONGO_URI)
        server.listen(PORT, ()=>{
            console.log(`App listening on Port ${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
}
start();