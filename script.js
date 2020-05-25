//Fonctionnalité 1
// document.getElementsByTagName("footer")[0].addEventListener("click", function() { 
// console.log("clique");
// });
//Fonctionnalité 1 bis
// var m=1;
// document.getElementsByTagName("footer")[0].addEventListener("click", function() { 
// 	 console.log("clique n°" + m);
// 	 m++;
// });
// Fonctionnalité 2
//console.log (document.getElementById("navbarHeader"));
//var hamburger =document.getElementsByClassName("navbar-toggler");

//console.log (hamburger);
//var revive =document.getElementById("navbarHeader");
//console.log (revive);
//hamburger[0].addEventListener("click", function() {
//document.getElementById("navbarHeader").classList.toggle("collapse");
//});
// Fonctionnalité 3
 //var card = document.getElementsByClassName("col-md-4")[0];
 //var point=card.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
 //var text =card.getElementsByClassName("card-text")[0];
 //point.addEventListener("click", function() {
 //text.style.color= "red"; ////style ="color: red" au texte de la card
 //});
//Fonctionnalité 4
// var card = document.getElementsByClassName("col-md-4")[1];
// var point=card.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
// var text =card.getElementsByClassName("card-text")[0];
// point.addEventListener("click", function() {
// 	if (text.style.color== "green")//style ="color: green" au texte de la card
// 		text.style.color= "";
// 	else
// 		text.style.color= "green";
// });
//Fonctionnalité 5
var navbar= document.getElementsByClassName("container d-flex justify-content-between")[0];
//console.log (navbar);
navbar.addEventListener("dblclick", function (e){
	if (e.target.id ==="link") {
		e.preventDefault();
	}
//document.getElementsByTagName("link").setAttribute('href', '#');
});
