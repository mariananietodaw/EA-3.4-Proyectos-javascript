const tablero = document.getElementById("tablero");

// piezas iniciales
const piezas = [
    ["♜","♞","♝","♛","♚","♝","♞","♜"],
    ["♟","♟","♟","","♟","","♟","♟"],
    ["",""," "," ","♟"," "," "," "],
    [" "," "," "," "," "," ","♟"," "],
    ["","","♙","","","","♙",""],
    ["","","","","","♘","",""],
    ["","♙","♙","♙","","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","","♖"]
];

// crear tablero
for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {

        const casilla = document.createElement("div");
        casilla.classList.add("casilla");

        // lógica de colores
        if ((fila + col) % 2 === 0) {
            casilla.style.backgroundColor = "#ffffff";
        } else {
            casilla.style.backgroundColor = "#575655";
        }

        // añadir pieza
        casilla.textContent = piezas[fila][col];

        tablero.appendChild(casilla);
    }
}