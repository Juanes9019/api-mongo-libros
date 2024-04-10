const { response } = require('express') // Importa la función `response` desde el módulo express

// Controlador para la solicitud GET a la ruta de Libros
librosGet = (req, res = response) => {
    res.json({
        msg: 'GET API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con GET
    })
}

// Controlador para la solicitud POST a la ruta de Libros
librosPost = (req, res = response) => {
    res.json({
        msg: 'POST API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con POST
    })
}

// Controlador para la solicitud PUT a la ruta de Libros
librosPut= (req, res = response) => {
    res.json({
        msg: 'PUT API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con PUT
    })
}

// Controlador para la solicitud DELETE a la ruta de Libros
librosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API' // Devuelve un objeto JSON con un mensaje indicando que se está accediendo a la API con DELETE
    })
}
    // Exporta los controladores de las rutas de Libros para que estén disponibles para otros módulos
module.exports = {
    librosGet,
    librosPost,
    librosPut,
    librosDelete
}