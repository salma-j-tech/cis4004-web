window.start = function () {

  document.getElementById("filterContent").style.display = "none";

  document.getElementById("newContent").style.display = "none";
  
} // end window.start

function showFilter() {

  document.getElementById("newContent").style.display = "none";

  let menuBox = document.getElementById("filterContent");

  // for visibility
  if (menuBox.style.display === "none")
  { // start if

    menuBox.style.display = "block";
    
  } // end if
  else
  {

    menuBox.style.display = "none";
    
  } // end else

} // end showFilter



