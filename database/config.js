const mongoose = require('mongoose'); // Importa la librería mongoose para interactuar con MongoDB

// Función para establecer la conexión con la base de datos
const dbConnection = () => {
    try {
        // Intenta conectar con la base de datos utilizando la URL proporcionada en la variable de entorno MONGODB_CNN
        mongoose.connect(process.env.MONGODB_CNN);
        console.log('Datos en Linea'); // Muestra un mensaje en consola indicando que la conexión se ha establecido correctamente

    } catch (error) {
        console.log(error); // Muestra el error en consola si la conexión falla

    throw new Error('Error al conectarse a la base de datos'); // Lanza una excepción con un mensaje de error
    }
}

// Exporta la función dbConnection para que esté disponible para otros módulos

module.exports = {
    dbConnection
}