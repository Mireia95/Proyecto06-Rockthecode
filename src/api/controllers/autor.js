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
    //!no eliminar datos ya presentes
    newAutor.books = [...oldAutor.books, ...req.body.books];
    //!elimino datos duplicados, si hay, en el array

    for (let i = 0; i < newAutor.books.length; i++) {
      const book1 = newAutor.books[i]._id.toString();
      for (let j = i + 1; j < newAutor.books.length; j++) {
        const book2 = newAutor.books[j]._id.toString();
        if (book1 === book2) {
          newAutor.books.splice(j, 1);
          j--;
          console.log('Estás añadiendo un libro que ya está añadido');
        }
      }
    }

    const updateAutor = await Autor.findByIdAndUpdate(id, newAutor, {
      new: true
    });
    return res.status(200).json(updateAutor);
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
