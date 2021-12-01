var express = require("express");
const app = express();

var mongoose = require("mongoose");

const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://mariane_freitas:mariane_freitas@cluster0.qtwy6.mongodb.net/biblioteca?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine","ejs")
app.set("views",__dirname+"/views")

app.use(express.urlencoded({extended:true}));
app.use(express.json())


app.use(express.static("public"));

const livrosRouter = require("./routers/livros-router");
const usuariosRouter = require("./routers/usuarios-router")

app.use("/biblioteca",livrosRouter,usuariosRouter)
// app.use("/adm",usuariosRouter)

app.listen(port,()=>{
    console.log(`servidor na porta ${port}`)
})
