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


// func for showAddNew
function showAddNew() {

  // hide filter menu
  document.getElementById("filterContent").style.display = "none";

  let formBox = document.getElementById("newContent");

  if (formBox.style.display === "none")
  { // start if

    formBox.style.display = "flex";
    
  } // end if

  else
  {

    formBox.style.display = "none";
    
  } // end else

} // end showAddNew func



