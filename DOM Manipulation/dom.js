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


// create article and add
function addNewArticle() {

  let articleTitle = document.getElementById("inputHeader").value;
  let articleText = document.getElementById("inputArticle").value;

  let typeClass = "";
  let labelText = "";

  if (document.getElementById("opinionRadio").checked)
  {

    typeClass = "opinion";
    labelText = "opinion";
    
  } // end if

    if (document.getElementById("recipeRadio").checked)
  {

    typeClass = "recipe";
    labelText = "Recipe";
    
  } // end if

    if (document.getElementById("lifeRadio").checked)
  {

    typeClass = "update";
    labelText = "Update";
    
  } // end if

  if (articleTitle === "" || articleText === "" || typeClass === "")
  {

    alert("Fill out everything please. One or more are not filled.");
    return;
    
  } // end if

  // new article element
  let newArticle = document.createElement("article");
  newArticle.classList.add(typeClass);

  // new marker label
  let newMarker = document.createElement("span");
  newMarker.classList.add("marker");
  newMarkerinnerText = markerText;
  

  // add title
  let h2 = document.createElement("h2");
  h2.innerText = title;
  
  // add p
  let p = document.createElement("p");
  p.innerText = text;
  
  // attach
  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(p);
  
  document.getElementById("articleList").appendChild(article);
  
  // clear input
  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
  
  // reapply filter
  filterArticles();

} // end addNewArticle
