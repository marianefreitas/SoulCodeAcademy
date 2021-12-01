const usuarios_bd = require("../models/usuarios-model");

exports.cadastrar_usuarios_get = (req,res)=>{
    res.render("../views/pages/cadastrarUsuarios");
}

exports.cadastrar_usuarios_post = (req,res)=>{
    let cadastrar_usuario = new usuarios_bd()

    cadastrar_usuario.Name = req.body.name
    cadastrar_usuario.Password = req.body.password
    cadastrar_usuario.Pass = req.body.pass

    cadastrar_usuario.save(err=>{
        if (err)
            return res.status(500).send("Erro ao cadastrar")
        res.redirect("/biblioteca/listandoUsuarios")
    })
}

exports.listar_usuarios = (req,res)=>{
    usuarios_bd.find({},(err,usuario)=>{
        if (err)
            return res.status(500).send("Erro ao listar")
        res.render("../views/pages/listarUsuarios",{lista_usuarios : usuario})
    })
}

exports.deletar_usuarios = (req,res)=>{
    var id = req.params.id
    usuarios_bd.deleteOne({_id:id},(err)=>{
        if(err)
            return res.status(500).send("Erro ao deletar")
        res.redirect("/biblioteca/listandoUsuarios")
    })
}

exports.editar_usuarios_get = (req,res)=>{
    var id= req.params.id
    usuarios_bd.findById(id,(err,usuario)=>{
        if(err)
            return res.status(500).send("erro ao buscar informações")
        res.render("../views/pages/editarUsuarios",{edita:usuario})
    })
}

exports.editar_usuarios_post = (req,res) =>{
    var id = req.body.id
    usuarios_bd.findById(id,(err,usuario)=>{
        if (err)
            return res.status(500).send("Erro ao Editar")
        usuario.Name = req.body.name
        usuario.Password = req.body.password
        usuario.Pass = req.body.pass

        usuario.save(err =>{
            if (err)
                return res.status(500).send("Erro ao Salvar")
            res.redirect("/biblioteca/listandoUsuarios")

        })

    })
}

exports.pesquisar_usuarios = (req,res)=>{
    var busca_usuario = req.query.search
    usuarios_bd.find({$or: [{Name:busca_usuario},{Password:busca_usuario},{Pass:busca_usuario}]},(err,usuario)=>{
        if (err)
            return res.status(500).send("Erro ao pesquisar")
        res.render("../views/pages/listarUsuarios",{lista_usuarios:usuario})
    })
}

