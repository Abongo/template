alert("yay javascript!!!");
console.log("i'm in the console")
function myfunction()
{
	alert("you clicked!!!")
}
var myVar=
document.getElementsByTagName("h1")
console.log(myVar);
myVar.onclick=function(){
alert("you clicked an h1")
};
jQuery(function(){
	$("h1").on("click",function(){
	alert("you clicked on h1!");
});
});