const Autor = require('../models/autor');

//!petición GET
//?añadido .populate("books");
const getAutores = async (req, res, next) => {
  try {
    const allAutores = await Autor.find().populate('books');
    return res.status(200).json(allAutores);
  } catch (error) {
    return res.status(400).json('Error en la petición GET');
  }
};

//!petición GET BY ID
//?añadido .populate("books");
const getAutorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autor = await Autor.findById(id).populate('books');
    return res.status(200).json(autor);
  } catch (error) {
    return res.status(400).json('Error en la petición GET BY ID');
  }
};

//! petición GET BY TITLE
//?añadido .populate("books");
const getAutorByName = async (req, res, next) => {
  try {
    const { title } = req.params;
    const autorTitle = await Autor.findOne({ title }).populate('books');
    return res.status(200).json(autorTitle);
  } catch (error) {
    return res.status(400).json('Error en la petición GET BY ID');
  }
};

//! petición POST
const postAutor = async (req, res, next) => {
  try {
    const newAutor = new Autor(req.body);
    const autorSaved = await newAutor.save();
    return res.status(201).json(autorSaved);
  } catch (error) {
    return res.status(400).json('Error en la petición POST');
  }
};

//! petición PUT/UPDATE
const updateAutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldAutor = await Autor.findById(id);
    const newAutor = new Autor(req.body);
    newAutor._id = id;
    newAutor.books = [...oldAutor.books, ...req.body.books];

    //?START CHECK DUPLICADOS: chequeo que no hayan datos repetidos en el campo alumnos:
    const idBooksSet = new Set(); //utilizo Set para chequear duplicados
    const arrayFinalBooks = []; //creo un array donde guardaré los datos no duplicados
    //con un ciclo forEach añado a Set cada alumno de newCasa. El metodo .add() permite añadir el dato solo si no se ha añadido previamente, evitando duplicados
    newAutor.books.forEach((idBook) => idBooksSet.add(idBook.toString()));

    //*ejemplo de codigo usando ciclo for in en vez de ciclo foreach
    /*  for (let id of newAutor.books) {
      const idString = id.toString(); //convierto el id en string para que me lo lea
        idBooksSet.add(idString); //añado a Set el id String, si ya no se añadió
    } */

    //cojo los datos de Set y los añado al array arrayAlumnosFinal
    idBooksSet.forEach((id) => arrayFinalBooks.push(id));
    newAutor.books = arrayFinalBooks; //paso arrayAlumnosFinal a newCasa.alumnos, para actualizarlo y quitarle posibles duplicados
    //?---END CHECK DUPLICADOS

    const updateAutor = await Autor.findByIdAndUpdate(id, newAutor, {
      new: true
    });
    return res.status(200).json(updateAutor);

    //---- CODIGO VIEJO chequear duplicados con ciclo FOR (sin usar Set)
    /* for (let i = 0; i < newAutor.books.length; i++) {
      const book1 = newAutor.books[i]._id.toString();
      for (let j = i + 1; j < newAutor.books.length; j++) {
        const book2 = newAutor.books[j]._id.toString();
        if (book1 === book2) {
          newAutor.books.splice(j, 1);
          j--;
          console.log('Estás añadiendo un libro que ya está añadido');
        }
      }
    } */
  } catch (error) {
    return res.status(400).json('Error en la petición PUT');
  }
};

//! petición DELETE
const deleteAutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteAutor = await Autor.findByIdAndDelete(id);
    return res.status(200).json(deleteAutor);
  } catch (error) {
    return res.status(400).json('Error en la petición DELETE');
  }
};

module.exports = {
  getAutores,
  getAutorByName,
  getAutorById,
  postAutor,
  updateAutor,
  deleteAutor
};
