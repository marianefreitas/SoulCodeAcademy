// 1
var primeira = $("div").text();
alert(primeira);

//2
var segunda = $("div").html();
alert(segunda);

//3
var terceira = $("a").attr("href");
console.log(terceira)

//4
$("div").text("Hello World!");

//5
$("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/220px-Heart_coraz%C3%B3n.svg.png");

//6
$("#myLink").text("Demo");
$("#myLink").attr("href","https://www.demo.com");

//7
$("p").append(" SIM!");

//8
$("p").prepend("SIM! ");

// //9
// $("div").remove();

// //10
// $("div").empty();

//11
$("div").remove(".teste,.demo");