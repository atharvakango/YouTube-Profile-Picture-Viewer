console.log("Chrome Extension ready to Go!");

// var iframe  = document.createElement ('div');
// iframe.src  = chrome.extension.getURL ('template.html');
// document.body.appendChild (iframe);
// //-----
// $.get(chrome.runtime.getURL('/template.html'), function(data) {
  
//     $(data).appendTo('body');
  
// });
//------


var x = document.getElementsByClassName("style-scope ytd-c4-tabbed-header-renderer no-transition");
// var modal = document.getElementById("myModal");
// var modalImg = document.getElementById("img01");
x[0].style.cursor = "pointer";

x[0].onclick = function() {
	// ;
	var t = x[0].children[0].getAttribute("src");
console.log(t);
    // modal.style.display = "block";
    // modalImg.src = t.replace("=s1", "=s10");
    var newLink = t.replace("=s1", "=s10");
    console.log(newLink);
    window.location = newLink;
}

// var span = document.getElementsByClassName("close")[0];
// span.onclick = function() { 
//     modal.style.display = "none";
// }

console.log("Chrome Extension Ended Execution!");



// new_header.style['background-color'] = '#FF00FF';
// for (elt of new_header) {
// 	elt.style['background-color'] = '#FF00FF';
// }