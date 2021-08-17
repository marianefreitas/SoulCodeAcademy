// 1) Selecionar todas as tags h2 e colocar um background verde nos elementos selecionados.

$(document).ready(function () {
    $("h2").css("backgroundColor", "green");
});

// 2) Selecionar o pai da classe buttons e colocar um background vermelho no elemento selecionado.

$(".buttons").parent().css({ backgroundColor: "red" });

// 3) Selecionar os elementos filhos da classe module e colocar como background a cor azul.
$(".module").find("*").css({ backgroundColor: "blue" });

//4) Selecionar o item da lista de índice 2 da classe module utilizando a função eq() e colocar como background a cor verde.
$(".module").find("li").eq(2).css({ backgroundColor: "green" });

//5) Selecionar o primeiro elemento da lista myList e colocar como background a cor Amarelo.
$("#myList").find("li").eq(0).css({ backgroundColor: "yellow" });

//6) Selecionar o último elemento da lista slideshow e colocar como background a cor preta.
$("#slideshow").find("li").last().css({ backgroundColor: "black" });

//7) Verifique se o primeiro elemento filho de Search é um form. Se for, exiba um alert na tela com a mensagem “O elemento form é filho de Search. Caso não seja, exiba um alert na tela com a mensagem “O elemento form não é filho de Search.
if ($("#search").children().first().is("form"))
    alert("O elemento form é filho de Search");
else
    alert("O elemento form não é filho de Search");

//8) Selecionar todas as listas não ordenadas, exceto a de id slideshow e colocar como background a cor azul.
$("ul").not("#slideshow").css({ backgroundColor: "blue" });

//9) Selecionar todos os itens de lista que possuam um parágrafo nele e colocar como background a cor rosa.

$("li").find("p").css({ backgroundColor: "pink" });

//10) Alterar o conteúdo da tag que possui a classe myListItem para “Este é um novo item de lista”
$("#myListItem").text("Este é um novo item da lista");

//11) Selecionar o próximo elemento após o elemento de classe selected e colocar um background cinza nele.
$ (".selected").next().css ({backgroundColor:"grey"});

//12) Selecionar o elemento anterior ao elemento de classe input_text e colocar um background cinza nele.
$ (".input_text").prev().css({backgroundColor:"grey"});

//13) Selecionar todos os irmãos do elemento que possui o id listItem_2 e colocar um background verde neles
$ ("#listItem_2").siblings("*").css({backgroundColor:"green"});

//14) Selecionar todos os elementos que possuam um atributo src e colocar um background amarelo nele.

$ ("[src]").css({backgroundColor:"yellow"});

//15) Selecionar dentro do elemento de id header e dentro do id nav, o elemento que contenha a classe selected. (Utilizando um seletor que contenha esse caminho)
$ ("#header #nav .selected")

//16) Selecionar todos os elementos que possui o atributo type=”text”
 $ ("[type*='text']")

 //17) Selecionar todos os elementos que possuam o atributo value.
 $ ("[value]")

 //18) Selecionar todos os elementos que possuam o atributo type diferente de submit e colocar um background vermelho nele

 $("[type]").not("[type='submit']").css({backgroundColor:"red"});

 //19) Selecionar todos os elementos que possuam o atributo href que inicia com a palavra blog e colocar um background verde nele.
 $ ("[href^='blog']").css({backgroundColor:"green"});

 //20) Selecionar todos os elementos que possuam o atributo value que terminam com a letra a e colocar um background vermelho nele.
 $ ("[value$='a']").css({backgroundColor:"red"});

 //21) Selecionar todos os elementos que possuam o atributo href que contenham a palavra html e colocar um background cinza nele.
 $("[href*='html']").css({backgroundColor:"grey"});




