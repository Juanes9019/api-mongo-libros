const { Router } = require('express'); // Importa la función Router de express para crear un router

const router = Router(); // Crea una instancia de Route

const { login } = require('../controllers/auth'); // Importa el controlador login desde el archivo '../controllers/auth'

// Define una ruta POST '/login' que utilizará el controlador login
router.post('/login', login);

module.exports = router; // Exporta el router para que esté disponible para otros módulos