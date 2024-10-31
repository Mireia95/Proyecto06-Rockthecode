const {
  getLibros,
  getLibroById,
  getLibroByTitle,
  postLibro,
  updateLibro,
  deleteLibro
} = require('../controllers/libro');

const librosRoutes = require('express').Router();

librosRoutes.get('/title/:title', getLibroByTitle);
librosRoutes.get('/:id', getLibroById);
librosRoutes.get('/', getLibros);

librosRoutes.post('/', postLibro);

librosRoutes.put('/:id', updateLibro);

librosRoutes.delete('/:id', deleteLibro);

//exporto las rutas
module.exports = librosRoutes;
