require('dotenv').config();

//traigo libreria express
const express = require('express');
/* const mongoose = require('mongoose'); */
const { connectDB } = require('./src/config/db');
const librosRoutes = require('./src/api/routes/libro');
const autoresRoutes = require('./src/api/routes/autor');

//guardo express en la variable app
const app = express();

//funcion para conectarme a la BBDD
connectDB();
//para que lea info json al hacer peticiones como put
app.use(express.json());

//importo rutas
app.use('/api/v1/libros', librosRoutes);
app.use('/api/v1/autores', autoresRoutes);

//creo ruta para error 404 Route not found
app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found');
});

//levanto servidor en puerto 3000
app.listen(3000, () => {
  console.log('Servidor levantado con éxito en http://localhost:3000💛');
});
