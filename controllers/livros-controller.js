const livros_bd = require("../models/livros-model");

exports.pagina_principal = (req, res) => {
    res.render("../views/pages/home");
}

exports.listar_livros = (req, res) => {
    livros_bd.find({}, (err, item) => {
        if (err)
            return res.status(500).send("Erro ao listar");
        res.render("../views/pages/listarLivros", { lista_livros: item })
    })
}
exports.listar_livros_usuario = (req,res)=>{
    livros_bd.find({}, (err, item) => {
        if (err)
            return res.status(500).send("Erro ao listar");
        res.render("../views/pages/listarLivrosUsuario", { lista_livros: item })
    })
}

exports.deletar_livros = (req, res) => {
    var id = req.params.id
    livros_bd.deleteOne({ _id: id }, (err) => {
        if (err)
            return res.status(500).send("erro ao deletar");
        res.redirect("/biblioteca/listandoLivros")
    })
}

exports.cadastrar_livros_get = (req, res) => {
    res.render("../views/pages/cadastrarLivros")
}

exports.cadastrar_livros_post = (req, res) => {
    let cadastrar_livro = new livros_bd()

    cadastrar_livro.Titulo = req.body.titulo
    cadastrar_livro.Autor = req.body.autor
    cadastrar_livro.Genero = req.body.genero
    cadastrar_livro.Status = req.body.status

    cadastrar_livro.save(err => {
        if (err)
            return res.status(500).send("Erro ao salvar livro")
        res.redirect("/biblioteca/listandoLivros")

    })
}

exports.editar_livros_get = (req, res) => {
    var id = req.params.id
    livros_bd.findById(id, (err, livro) => {
        if (err)
            return res.status(500).send("Erro ao buscar as informações")
        res.render("../views/pages/editarLivros",{banana : livro})
    })
}

exports.editar_livros_post = (req,res)=>{
    var id = req.body.id
    livros_bd.findById(id,(err,livro)=>{
        if (err)
            return res.status(500).send("Erro ao editar as informações")
        livro.Titulo = req.body.titulo
        livro.Autor = req.body.autor
        livro.Genero = req.body.genero
        livro.Status = req.body.status

        livro.save(err => {
            if (err)
                return res.status(500).send("Erro ao salvar as informações")
            res.redirect("/biblioteca/listandoLivros")
        })
    })

}


exports.pesquisar_livros_adm = (req,res)=>{
    var busca_livro_adm = req.query.search
    livros_bd.find({$or:[{Titulo:busca_livro_adm},{Autor:busca_livro_adm},{Genero:busca_livro_adm},{Status:busca_livro_adm}]},(err,livro)=>{
        if (err)
            return res.status(500).send("Erro ao pesquisar")
        res.render("../views/pages/listarLivros",{lista_livros:livro})
    })
}

exports.pesquisar_livros_usuario = (req,res) =>{
    var busca_livro_usuario = req.query.pesquisa
    livros_bd.find({$or:[{Titulo:busca_livro_usuario},{Autor:busca_livro_usuario},{Genero:busca_livro_usuario},{Status:busca_livro_usuario}]},(err,livro)=>{
        if (err)
            return res.status(500).send("Erro ao pesquisar")
        res.render("../views/pages/listarLivrosUsuario",{lista_livros:livro})
    })
}
