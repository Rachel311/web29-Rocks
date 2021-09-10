require('dotenv').config();

const { PORT } = require('./config');

const express = require('express');

const cors = require('cors');
const helmet = require('helmet');

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());

server.get('/', (req, res) => {
    res.send(`
    <h1>Web 29 is awesome!</h1>
    `)
});


server.use('*', (req, res) => {
    res.json({
        message: 'web 29 is awesome!'
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})