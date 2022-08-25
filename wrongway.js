var i; 

var arLinks = new Array();

arLinks[0] = "index.html";
arLinks[1] = "never.html";


i = Math.floor( Math.random() * arLinks.length );
window.location = arLinks[i];