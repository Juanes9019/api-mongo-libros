const express = require('express');
const { dbConnection } = require('../database/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8086; 
        this.librosPath = '/api/libros';
        this.authPath = '/api/auth';
        this.middlewares();
        this.routes();
        this.connectDb();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`);
        });
    }

    middlewares() {
        // Configura CORS para permitir solicitudes desde cualquier origen
        this.app.use(cors());

        // Configura body-parser para analizar datos del cuerpo de las peticiones HTTP
        this.app.use(bodyParser.json()); // Analiza application/json
    }

    routes() {
        // Configura las rutas de la aplicación
        this.app.use(this.librosPath, require('../routes/libros'));
        this.app.use(this.authPath, require('../routes/auth'));
    }

    async connectDb() {
        await dbConnection();
    }
}

module.exports = Server;
