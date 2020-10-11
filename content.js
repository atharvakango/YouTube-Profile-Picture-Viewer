console.log("Chrome Extension ready to Go!");


// Creating the HTML for injection
var parent_div  = document.createElement ('div');
parent_div.id = "myModal";
parent_div.className = "modal";
var modal_span  = document.createElement ('span');
modal_span.className = "close";
modal_span.innerHTML = "&times;";
var modal_img  = document.createElement ('img');
modal_img.className = "modal-content";
modal_img.id = "img01";
var child_div  = document.createElement ('div');
child_div.id = "caption";

//Injecting the creating HTML to the page
document.body.appendChild(parent_div);
document.getElementById("myModal").appendChild(modal_span);
document.getElementById("myModal").appendChild(modal_img);
document.getElementById("myModal").appendChild(child_div);


var x = document.getElementsByClassName("style-scope ytd-c4-tabbed-header-renderer no-transition");

var modal = document.getElementById("myModal"); 
var modalImg = document.getElementById("img01");
x[0].style.cursor = "pointer";

x[0].onclick = function() {
	var t = x[0].children[0].getAttribute("src");
    modal.style.display = "block";
    var newLink = t.replace("=s1", "=s10");
    modalImg.src = newLink;
    console.log(newLink);
    // window.location = newLink;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

console.log("Chrome Extension Ended Execution!");
