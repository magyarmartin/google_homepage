var text = document.getElementById("search");
text.onfocus = function(){
	document.getElementById("searchdiv").style.border = "1px solid #4D90FE";
}
text.onblur = function(){
	document.getElementById("searchdiv").style.border = "1px solid #D9D9D9";
}