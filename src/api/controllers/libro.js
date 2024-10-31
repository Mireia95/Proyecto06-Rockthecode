const Libro = require('../models/libro');

//!petición GET
const getLibros = async (req, res, next) => {
  try {
    const allLibros = await Libro.find();
    return res.status(200).json(allLibros);
  } catch (error) {
    return res.status(400).json('Error en la petición GET');
  }
};

//!petición GET BY ID
const getLibroById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findById(id);
    return res.status(200).json(libro);
  } catch (error) {
    return res.status(400).json('Error en la petición GET BY ID');
  }
};

//! petición GET BY TITLE
const getLibroByTitle = async (req, res, next) => {
  try {
    const { title } = req.params;
    const libroTitle = await Libro.findOne({ title });
    return res.status(200).json(libroTitle);
  } catch (error) {
    return res.status(400).json('Error en la petición GET BY ID');
  }
};

//! petición POST
const postLibro = async (req, res, next) => {
  try {
    const newLibro = new Libro(req.body);
    const libroSaved = await newLibro.save();
    return res.status(201).json(libroSaved);
  } catch (error) {
    return res.status(400).json('Error en la petición POST');
  }
};

//! petición PUT/UPDATE
const updateLibro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newLibro = new Libro(req.body);
    newLibro._id = id;
    const updateLibro = await Libro.findByIdAndUpdate(id, newLibro, {
      new: true
    });
    return res.status(200).json(updateLibro);
  } catch (error) {
    return res.status(400).json('Error en la petición PUT');
  }
};

//! petición DELETE
const deleteLibro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteLibro = await Libro.findByIdAndDelete(id);
    return res.status(200).json(deleteLibro);
  } catch (error) {
    return res.status(400).json('Error en la petición DELETE');
  }
};

module.exports = {
  getLibros,
  getLibroByTitle,
  getLibroById,
  postLibro,
  updateLibro,
  deleteLibro
};
