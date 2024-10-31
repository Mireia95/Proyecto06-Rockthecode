const Libro = require('../../api/models/libro');
const libros = require('../../data/libros');

const mongoose = require('mongoose');

//funcion para la semilla
const runSeed = async () => {
  try {
    //COPIAR URL DE LA BBDD, como no se sube a GitHub no hace falta cogerlo de process.env.
    //Es solo para el desarrollol
    await mongoose.connect(
      'mongodb+srv://RTCmireia:unoenvtruivnidfbnopvid@cluster0.w1gpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );

    //elimino la colección
    await Libro.collection.drop();
    console.log('Colección libros eliminada');

    //poner datos de la seed en la coleccion
    await Libro.insertMany(libros);
    console.log('Datos de la seed insertados con éxito');

    //me desconecto de la BBDD
    await mongoose.disconnect();
    console.log('Desconectados de la BBDD');
  } catch (error) {
    console.log(`Error en lanzar la semilla. Error: ${error}`);
  }
};

//ejecuto la funcion
runSeed();

//!en package.json guardo la ruta de este script
/* "librosSeed": "node ./src/utils/seeds/libros-seed" */
//!lo puedo lanzar con npm run librosSeed
