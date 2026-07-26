import { filterNades } from "./components/filters.js";
import { createNadeCard } from "./components/nadeCard.js";
import { getNades } from "./api/nades.js";

const container = document.querySelector("#nades");

let filters = {
    map: "",
    type: ""
};


function render() {
    container.innerHTML = "";

    const results = filterNades(getNades, filters);

    results.forEach(nade => {
        container.appendChild(createNadeCard(nade));
    });
}

render();