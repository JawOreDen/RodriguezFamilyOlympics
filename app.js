let oList = document.getElementById("o-List");
  
// This handler will be executed only once when the cursor
// moves over the ordered list
oList.addEventListener("mouseenter", function( event ) {   
  // highlight the mouseenter target
  event.target.style.color = "red";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
oList.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "blue";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

oList.addEventListener('mouseenter', function(event) {
    event.target.style.backgroundColor = 'black';

    setTimeout(function(){
        event.target.style.backgroundColor = '';
    },4500);
}, false);

