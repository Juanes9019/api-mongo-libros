const {Schema, model} = require('mongoose'); // Importa las funciones Schema y model de mongoose para definir esquemas y modelos de datos

// Define el esquema del modelo Libro
const LibroSchema = Schema({

    IDlibro: { type: Number, required: [true, 'El id del libro es obligatorio'],unique: true },

    ISBN: { type: Number, required: [true, 'El ISBN es obligatorio']},

    TITULO: { type: String, required: [true, 'El titulo es obligatorio'] },

    AUTOR: { type: String, required: [true, 'El autor es obligatorio'] },

    IDeditorial: { type: Number, required: [true, 'El id del editorial es obligatorio']},

    FECHA: { type: String, required: [true, 'La fecha es obligatoria'] },

    PRECIO: { type: Number, required: [true, 'El precio es obligatorio']},

    COMENTARIOS: {type: String,required: [true, 'El comentario es obligatorio'] },

    Foto: { type: String, required: [true, 'La imagen es obligatoria'] },
})

// Crea y exporta el modelo Libro a partir del esquema LibroSchema
module.exports = model('Libro', LibroSchema)
