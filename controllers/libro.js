const {response} = require('express');
const Libros = require('../modules/libro');

const librosGet = async (req, res = response) => {
    try {
        const libros = await Libros.find();
        res.json({
            libros
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: 'Error en el servidor'});
    }
}


const librosPost = async (req, res = response) => {
    try {
        // Debug: imprimir los datos del cuerpo de la solicitud
        console.log('Datos del cuerpo de la solicitud:', req.body);

        // Extraer datos del cuerpo de la solicitud
        const { IDlibro, ISBN, TITULO, AUTOR, IDeditorial, FECHA, PRECIO, COMENTARIOS, Foto } = req.body;

        // Crear una nueva instancia del modelo de libro con los datos proporcionados
        const libro = new Libros({ IDlibro, ISBN, TITULO, AUTOR, IDeditorial, FECHA, PRECIO, COMENTARIOS, Foto });

        // Guardar el libro en la base de datos
        await Libros.save();

        // Enviar respuesta al cliente con el libro creado
        res.status(201).json({
            msg: 'libro creado exitosamente',
            libro
        });
    } catch (error) {
        // Manejar errores específicos
        if (error.name === 'ValidationError') {
            // Error de validación del esquema
            const errorMessages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ msg: 'Error de validación', errors: errorMessages });
        } else if (error.code === 11000) {
            // Error de índice único duplicado
            return res.status(400).json({ msg: 'Error: Ya existe un libro con este ID', error });
        } else {
            // Otros errores
            console.error('Error en el servidor:', error);
            return res.status(500).json({ msg: 'Error en el servidor' });
        }        
    }
}


// Controlador para actualizar un libro existente
const librosPut = async (req, res = response) => {
    try {
        const { IDlibro } = req.params; 
        const { ISBN, TITULO, AUTOR, IDeditorial, FECHA, PRECIO, COMENTARIOS, Foto } = req.body;
        const libro = await Libros.findOneAndUpdate({ IDlibro }, { ISBN, TITULO, AUTOR, IDeditorial, FECHA, PRECIO, COMENTARIOS, Foto }, { new: true });

        if (!libro) {
            return res.status(404).json({
                msg: 'libro no encontrado'
            });
        }

        res.json({
            msg: 'libro actualizado',
            libro
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
}

const librosDelete = async (req, res = response) => {
    try {
      const { IDlibro } = req.params; 
      const libro = await Libros.findOneAndDelete({ IDlibro });
  
      if (!libro) {
        return res.status(404).json({
          msg: 'libro no encontrado'
        });
      }
  
      res.json({
        msg: 'libro eliminado',
        libro
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error en el servidor' });
    }
  }

module.exports ={
    librosGet,
    librosPost,
    librosPut,
    librosDelete
}
