const { Router } = require('express');
const router = Router();
const { librosGet, librosPost, librosPut, librosDelete } = require('../controllers/libro');

// Ruta para obtener todos los libros (GET '/')
router.get('/', librosGet);

// Ruta para crear un nuevo libro (POST '/')
router.post('/', librosPost);



// Ruta para actualizar un libro existente (PUT '/:IDlibro')
router.put('/:IDlibro', librosPut); // Cambiar _id a IDlibro

// Ruta para eliminar un libro existente (DELETE '/:IDlibro')
router.delete('/:IDlibro', librosDelete);

module.exports = router;
