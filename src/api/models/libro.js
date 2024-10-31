const mongoose = require('mongoose');

//creo schema
const libroSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    year: { type: Number },
    img: { type: String },
    avaiable: { type: Boolean, required: true },
    categories: [
      {
        type: String,
        enum: [
          'thriller',
          'fantasy',
          'romance',
          'mystery',
          'horror',
          'classic',
          'biography',
          'novel',
          'science fiction',
          'drama'
        ]
      }
    ]
  },
  { timestamps: true, collection: 'libros' }
);

//creo modelo
const Libro = mongoose.model('libros', libroSchema, 'libros');

//exporto modelo
module.exports = Libro;
