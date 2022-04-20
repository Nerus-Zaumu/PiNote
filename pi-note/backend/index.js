require('dotenv').config();
const express = require('express');
const http = require('http');
const connection = require('../backend/db/init');

const app = express()
PORT = process.port.env || 5000;

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