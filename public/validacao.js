



function valida() {
    var user = $("#usuario").val()
    var senha = $("#senha").val()
    if (user == "Mariane" && senha == "W@riane") {
        window.location.href = "/biblioteca/listandoLivros"
    } else
        window.location.href = "/biblioteca/listandoLivrosUsuario"
}


// $(document).ready(function(){

//     $("#btn").click(function(){
//         var user = $("#usuario").val()
//         var senha = $("#senha").val()
//        if (user == "adm" && senha =="adm"){
//         window.location.href = "/biblioteca/listandoLivros"
//        }else
//        window.location.href = "/biblioteca/listandoLivrosUsuarios"
//     })


// })
