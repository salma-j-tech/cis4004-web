// funcs for the counter

function counter() { // start counter

  return parseInt (document.getElementById("counter").innerText, 10);
  
} // end counter

function updateCounter(value) {

  document.getElementById("counter").innerText = value;
  
} // end updateCounter func

function tickUp() { // counter + 1

  updateCounter(counter() + 1);
  
} // end tickUp

function tickDown() { // counter - 1

  updateCounter(counter() - 1);
  
} // end tickDown




