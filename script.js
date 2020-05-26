//Fonctionnalité 1
 document.getElementsByTagName("footer")[0].addEventListener("click", function() { 
 console.log("clique");
 });
//Fonctionnalité 1 bis
 var m=1;
 document.getElementsByTagName("footer")[0].addEventListener("click", function() { 
 	 console.log("clique n°" + m);
 	 m++;
 });
 // Fonctionnalité 2
console.log (document.getElementById("navbarHeader"));
var hamburger =document.getElementsByClassName("navbar-toggler");

console.log (hamburger);
var revive =document.getElementById("navbarHeader");
console.log (revive);
hamburger[0].addEventListener("click", function() {
document.getElementById("navbarHeader").classList.toggle("collapse");
});
// Fonctionnalité 3
 var card1 = document.getElementsByClassName("col-md-4")[0];
 var point1=card1.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
 var text1 =card1.getElementsByClassName("card-text");
 //console.log(text1[0].innerHTML);
point1.addEventListener("click", function() {
text1[0].style.color ="red";
 });
//Fonctionnalité 4
 var card2 = document.getElementsByClassName("col-md-4")[1];
 var point2=card2.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
 var text2 =card2.getElementsByClassName("card-text");
 console.log(point2);
 point2.addEventListener("click", function() {
 	if (text2[0].style.color== "green")  //style ="color: green" au texte de la card
 		text2[0].style.color= "";
 	else
 		text2[0].style.color= "green";
 });
//Fonctionnalité 5
var navbar= document.getElementsByClassName("container d-flex justify-content-between")[0];
//console.log (navbar);
navbar.addEventListener("dblclick", function (e){

	document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
});
//Fonctionnalité 6
//console.log (document.getElementsByClassName("btn btn-sm btn-success"));
var view= document.getElementsByClassName("btn btn-sm btn-success");
var onMouseOver= function () {
var img = document.getElementsByClassName("card-img-top");
var text = document.getElementsByClassName("card-text");
for (let m = 0; m< img.length; m++) {
img[m].length=(img[m].length) * 0.2;
img[m].width=(img[m].width) * 0.2;
text[m].textContent="";
}};
for (let i = 0; i < view.length; i++) {
view[i].addEventListener("mouseover", onMouseOver)
}
