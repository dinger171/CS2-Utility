import { filterNades } from "./components/filters.js";
import { createNadeCard } from "./components/nadeCard.js";

const container = document.querySelector("#nades");

let filters = {
    map: "",
    type: ""
};

async function getNades() {
  const url = "http://2a0d:3344:5230:2c00::115/getNades";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}

function render() {
    container.innerHTML = "";

    const results = filterNades(getNades, filters);

    results.forEach(nade => {
        container.appendChild(createNadeCard(nade));
    });
}

render();