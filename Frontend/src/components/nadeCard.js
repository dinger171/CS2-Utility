export function createNadeCard(nade) {
    const card = document.createElement("div");

    card.className = "nade-card";

    card.innerHTML = `
        <h3>${nade.name}</h3>
        <p>${nade.map}</p>
        <p>${nade.type}</p>
    `;

    return card;
}