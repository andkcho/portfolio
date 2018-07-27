var bodyTop = window.document.body.scrollTop;

var square = document.getElementById("square");




function moused(e){
  // get mouse x coordinate
  var x = e.clientX + "px";
  console.log("x", x);
  
  // get mouse y coordinate
  var y = e.clientY + "px";
  console.log("y", y);
  
  square.style.transform = "translate(" + x + ", " + y + ")";
 
}

window.addEventListener("mousemove", moused);