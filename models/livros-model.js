var mongoose = require ("mongoose");

const Livros = mongoose.model("livros",{
    Titulo: String,
    Autor:String,
    Genero:String,
    Status:String
})

module.exports = Livros