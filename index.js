require('dotenv').config(); // Importa y carga las variables de entorno desde el archivo .env

const Server = require('./modules/server'); // Importa la clase Server desde el archivo './modules/server'
const server = new Server(); // Crea una nueva instancia de la clase Server

server.listen(); // Inicia el servidor llamando al método listen() de la instancia server