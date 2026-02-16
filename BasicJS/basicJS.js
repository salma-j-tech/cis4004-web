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

function runForLoop() {

  const counter = counter();

  let output = "";

  for (let i = 0; i <= counter; i++)  
  { // start for

    output += i + " ";
    
  } // end for

  document.getElementById("forLoopResult").innerText = output.trim();
  
} // end runForLoop function

function showOddNumbers() {

  const counter = counter();
  let output = "";

  for (let i = 1; i <= counter; i = i + 2;)
  { // start for

    output += i + " ";
    
  } // end for loop

  document.getElementById("oddNumbersResult").innerText = output.trim();
  
} // end showOddNumbers func

function addMultiplesToArray() {

  const counter = counter();
  const arr = [];

  for (let i = counter; i >= 5; i--)
  { // start for

    if (i % 5 === 0)
    { // start if

      arr.push(i);
      
    } // end if
    
  } // end for

  // print array
  console.log(arr);
  
} // end addMultiplesToArray func


