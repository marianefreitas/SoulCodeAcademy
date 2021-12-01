const express = require("express")
const router = express.Router();

const usuariosController = require("../controllers/usuarios-controller");

router.get("/cadastrandoUsuarios",usuariosController.cadastrar_usuarios_get);

router.post("/cadastrandoUsuarios",usuariosController.cadastrar_usuarios_post);

router.get("/listandoUsuarios",usuariosController.listar_usuarios);

router.get("/deletandoUsuarios/:id",usuariosController.deletar_usuarios);

router.get("/editandoUsuarios/:id",usuariosController.editar_usuarios_get);

router.post("/editandoUsuarios",usuariosController.editar_usuarios_post)

router.get("/pesquisandoUsuarios",usuariosController.pesquisar_usuarios)



module.exports = router