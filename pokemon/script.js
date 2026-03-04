let currentPokemon = null;


let team = [];

const CACHE_PREFIX = "poke_cache:";


// get cached json

function getCachedPokemon(key) 
{ // start getCachedPokemon

  const raw = localStorage.getItem(CACHE_PREFIX + key);

  if (!raw) 
  {
    return null;
  } // end if

  return JSON.parse(raw);

} // end getCachedPokemon

// save json
function setCachedPokemon(key, data) 
{

  localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data));

} // end setCachedPokemon


async function findPokemon() 
{

  const input = document.getElementById("pokemonInput").value.trim().toLowerCase();

  if (input.length === 0) 
  { // start if
    
    alert("enter a pokemon name or id");
    
    return;
    
  } // end if

  // 1 - try cache
  let data = getCachedPokemon(input);

  // 2 - if no cached then fetch
  
  if (data === null) 
  { // start if

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(input)}`);

    if (!response.ok) 
    { // start if
      
      alert("pokemon not found");
      
      return;
      
    } // end if

    data = await response.json();

    setCachedPokemon(input, data);

    setCachedPokemon(String(data.id), data);
    
    setCachedPokemon(String(data.name).toLowerCase(), data);

  } // end cache check

  currentPokemon = data;

  // image aka sprite
  document.getElementById("pokemonImage").src = data.sprites.front_default;

  // audio
  const cry = (data.cries && (data.cries.latest || data.cries.legacy)) ? (data.cries.latest || data.cries.legacy) : "";

  if (cry !== "") 
  { // start if
    
    document.getElementById("pokemonAudio").src = cry;
    
  } //end if
  else 
  { // start else
    
    document.getElementById("pokemonAudio").removeAttribute("src");
    
  } // end else

  // list moves
  const moves = data.moves;

  const moveSelects = [
    document.getElementById("move1"),
    document.getElementById("move2"),
    document.getElementById("move3"),
    document.getElementById("move4")
  ];

  moveSelects.forEach(select => {

    select.innerHTML = "";

    // placeholder
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "-- choose a move --";
    select.appendChild(placeholder);

    moves.forEach(m => {

      const option = document.createElement("option");
      option.value = m.move.name;
      option.textContent = m.move.name;

      select.appendChild(option);

    });

  });

} // end findPokemon


function addToTeam() {

  if (currentPokemon === null) 
  { // begin if
    alert("find a pokemon first");
    return;
  } // end if

  const moves = [
    document.getElementById("move1").value,
    document.getElementById("move2").value,
    document.getElementById("move3").value,
    document.getElementById("move4").value
  ].filter(m => m !== "");

  const pokemon = {
    name: currentPokemon.name,
    image: currentPokemon.sprites.front_default,
    moves: moves
  };

  team.push(pokemon);

  displayTeam();

} // end addToTeam


function displayTeam() 
{ // displayTeam func

  const container = document.getElementById("team");
  container.innerHTML = "";

  team.forEach(p => {

    const row = document.createElement("div");

    const img = document.createElement("img");
    
    img.src = p.image;
    
    img.width = 100;

    const ul = document.createElement("ul");

    p.moves.forEach(moveName => {

      const li = document.createElement("li");
      li.textContent = moveName;
      ul.appendChild(li);

    });

    row.appendChild(img);
    
    row.appendChild(ul);

    container.appendChild(row);

  });

} // end displayTeam


// map buttons to funcs
document.getElementById("findBtn").addEventListener("click", findPokemon);

document.getElementById("addBtn").addEventListener("click", addToTeam);
