const {
  getAutores,
  getAutorById,
  getAutorByName,
  postAutor,
  updateAutor,
  deleteAutor
} = require('../controllers/autor');

const autoresRoutes = require('express').Router();

autoresRoutes.get('/name/:name', getAutorByName);
autoresRoutes.get('/:id', getAutorById);
autoresRoutes.get('/', getAutores);

autoresRoutes.post('/', postAutor);

autoresRoutes.put('/:id', updateAutor);

autoresRoutes.delete('/:id', deleteAutor);

//exporto las rutas
module.exports = autoresRoutes;

//añadido en index.js : app.use("/api/v1/autores", autoresRoutes);
