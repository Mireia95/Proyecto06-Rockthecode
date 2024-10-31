
const mongoose = require("mongoose");

//creo schema
const autorSchema = new mongoose.Schema({
    name: {type: String, require: true, unique: true},
    nacionality: {type: String},
    books: [{type: mongoose.Types.ObjectId, ref: "libros"}]

},{
    timestamps: true,
    collection: "autores"
});

//creo modelo
const Autor = mongoose.model("autores", autorSchema, "autores");

//exporto modelo
module.exports = Autor;