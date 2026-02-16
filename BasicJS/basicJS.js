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

function printCarObject() {

  const type = document.getElementById("carType").value;
  const mpg = document.getElementById("carMPG").value;

  const color = document.getElementById("carColor").value;

  const carObj = {

    cType: type,
    cMPG: mpg,
    cColor: color;
    
  }; // end const carObj
  
} // end printCarObject function

function loadCar(num) {

  let carObj;

  if (num === 1)
  { // start if

    carObj = carObject1;
    
  } // end if

  else if (num === 2)
  { // start else if

    carObj = carObject2;
    
  } // end else if

  else if (num === 3)
  { // start else if 2

    carObj = carObject3;
    
  } // end else if 2

  // back to function

  document.getElementById("carType").value = carObj.cType;
  document.getElementById("carMPG").value = carObj.cMPG;

  document.getElementById("carColor").value = carObj.cColor;
  
} // end loadCar func

// text color change func
function changeColor(colorNum) {

  const p = document.getElementById("styleParagraph");

  if (colorNum === 1)
  { // start if red

    p.style.color = "red";
    
  } // end if red

  else if
  { // start else if green

    p.style.color = "green";
    
  } // end else if green

  else if
  { // else if blue

    p.style.color = "blue";
    
  } // end else if blue
  
} // end changeColor func
