//me traigo libreria mongoose
const mongoose = require('mongoose');

//creo funcion para conectarme a la BBDD
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Conectado con éxito a la BBDD 😁');
  } catch (error) {
    console.log('No se ha podido conectarse a la BBDD 😥');
  }
};

//exporto la función
module.exports = { connectDB };
