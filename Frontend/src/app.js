import { filterNades } from "./components/filters.js";
import { createNadeCard } from "./components/nadeCard.js";
import { getNades } from "./api/nades.js";

let container;
let filters;

export function initApp() {
    container = document.querySelector("#nades");

    filters = {
        map: "",
        type: ""
    };
}
export async function render() {
    container.innerHTML = "";

    const results = filterNades(await getNades(), filters);

    results.forEach(nade => {
        container.appendChild(createNadeCard(nade));
    });
}