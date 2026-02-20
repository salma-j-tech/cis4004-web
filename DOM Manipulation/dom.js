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


// func for visibility based on boxes checked
function filterArticles() {

  // check which filters are live
  let opinionChecked = document.getElementById("opinionCheckbox").checked;
  let recipeChecked = document.getElementById("recipeCheckbox").checked;
  let updateChecked = document.getElementById("updateCheckbox").checked;

  let articles = document.getElementById("articleList")
  {
    .getElementsByTagName("article");
  } // end let

  // counter for loop
  for (let i = 0; i < articles.length; i++)
  {

    // check if match article classes
    if (articles[i].classList.contains("opinion"))
    {

      articles[i].style.display = opinionChecked ? "" : "none";
      
    } // end if

    if (articles[i].classList.contains("recipe"))
    {

      articles[i].style.display = recipeChecked ? "" : "none";
      
    } // end if

    if (articles[i].classList.contains("update"))
    {

      articles[i].style.display = updateChecked ? "" : "none";
      
    } // end if
    
    
  } // end for
  
} // end filterArticles

