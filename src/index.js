"use strict";
console.log("hi");

let pokemonList = [];

(async function getPokemons() {
  try {
    const responseBulbasaur = await fetch(
      "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    );
    const responseIvysaur = await fetch(
      "https://pokeapi.co/api/v2/pokemon/ivysaur"
    );
    const data1 = await responseBulbasaur.json();
    const data2 = await responseIvysaur.json();

    pokemonList.push(data1, data2);
    select(pokemonList);
  } catch (error) {
    console.log("Error: ", error.message);
  }
})();

async function select(list) {
  try {
    const bulbasaur = list[0];
    const ivysaur = list[1];
    const selection = document.querySelector("select");
    const button = document.querySelector("button");
    const section = document.querySelector("section");

    button.addEventListener("click", function () {
      if (section.firstElementChild)
        section.removeChild(section.firstElementChild);
      if (selection.value == "select") {
        alert("select your pokemon");
      } else if (selection.value) {
        // Display the following info for each pokemon: name, picture, stats and abilties.
        let poke = selection.value == "bulbasaur" ? bulbasaur : ivysaur;
        section.insertAdjacentHTML(
          "afterbegin",
          `<div class="card p-2" style="width: 18rem">
        <img
          src="${
            poke.name == "bulbasaur"
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaclSlk2r66bbWERGnl22DK3rzT3AKdtdMw&usqp=CAU"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3QMFXawdcDQKiJMVv14xTpbqFlMXLDNMzQ&usqp=CAU"
          }"
          class="card-img-top w-50 mx-auto p-2 rounded-pill border border-2 border-dark"
          alt="pokemon"
        />
        <div class="card-body">
          <h5 class="card-title text-center">${poke.name}</h5>
        </div>

        <div id="table-div-id">
          <table class="table table-dark table-hover" id="table">
            <thead>
              <tr class="table-dark">
                <th
                  class="text-center text-decoration-underline"
                  scope="col"
                  colspan="2"
                >
                  stats
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-dark">
                <td class="table-dark">${poke.stats[0].stat.name}</td>
                <td class="table-dark text-end">${poke.stats[0].base_stat}</td>
              </tr>
              <tr class="table-dark">
                <td class="table-dark">${poke.stats[1].stat.name}</td>
                <td class="table-dark text-end">${poke.stats[1].base_stat}</td>
              </tr>
              <tr class="table-dark">
                <td class="table-dark">${poke.stats[2].stat.name}</td>
                <td class="table-dark text-end">${poke.stats[2].base_stat}</td>
              </tr>
              <tr class="table-dark">
                <td class="table-dark">${poke.stats[3].stat.name}</td>
                <td class="table-dark text-end">${poke.stats[3].base_stat}</td>
              </tr>
              <tr class="table-dark">
                <td class="table-dark">${poke.stats[4].stat.name}</td>
                <td class="table-dark text-end">${poke.stats[4].base_stat}</td>
              </tr>
              <tr class="table-dark">
                <td class="table-dark">${poke.stats[5].stat.name}</td>
                <td class="table-dark text-end">${poke.stats[5].base_stat}</td>
              </tr>
            </tbody>
          </table>

          <table class="table table-dark table-hover" id="table">
            <thead>
              <tr class="table-dark">
                <th class="text-center text-decoration-underline" scope="col">
                  abilities
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-dark">
                <td class="table-dark text-center">${
                  poke.abilities[0].ability.name
                }</td>
              </tr>
              <tr class="table-dark">
                <td class="table-dark text-center">${
                  poke.abilities[1].ability.name
                }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>`
        );
      }
    });

    console.log(bulbasaur, ivysaur);
  } catch (err) {
    console.log("Error: ", err.message);
  }
}
