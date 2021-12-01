var mongoose = require("mongoose")

const Usuarios = mongoose.model("usuarios",{
    Name : String,
    Password : String,
    Pass : String
})

module.exports = Usuarios;