document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const id = document.querySelector("#pokemonId").value;
  

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#pokemonBox").innerHTML = `
      <div id="namebox">
            <h1>${capitalizeFirstLetter(data.name)} (ID: ${data.id})</h1>
            <br>
            <img src="${data.sprites.other.dream_world.front_default}" alt="Pokemon name"/>
      </div>

      <div id="pokemonInfos">
       
        <p id="hw">Weight: ${data.weight}kg Height: ${data.height}m</p>
        <br>
        <br>
        <div id="hpxp">
        <p>HP: ${data.stats[0].base_stat} </p>
        <p>XP: ${data.base_experience}</p>
         </div>
        <br>
        <br>
        <div id="typeability">
        <p>Type: ${capitalizeFirstLetter(data.types[0].type.name)}</p>
        <br>
        <p>Ability: ${capitalizeFirstLetter(data.abilities[0].ability.name)}</p>
        </div>
      </div>`;
    })

    .catch((err) => {
      document.querySelector("#pokemonBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });

  e.preventDefault();
}