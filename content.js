console.log("Chrome Extension ready to Go!");

var x = document.getElementsByClassName("style-scope yt-img-shadow");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
x[0].style.cursor = "pointer";

x[0].onclick = function() {
	var t = x[0].getAttribute("src");
    modal.style.display = "block";
    modalImg.src = t.replace("=s1", "=s10");
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

console.log("Chrome Extension Ended Execution!");



// new_header.style['background-color'] = '#FF00FF';
// for (elt of new_header) {
// 	elt.style['background-color'] = '#FF00FF';
// }