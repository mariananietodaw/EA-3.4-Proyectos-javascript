//  CAMBIO DE PROYECTO
function mostrarProyecto(id) {
    document.getElementById("ajedrez").classList.add("oculto");
    document.getElementById("juego").classList.add("oculto");

    document.getElementById(id).classList.remove("oculto");
}


// ajedrez 

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

// juego
const personaje = document.getElementById("personaje");
const obstaculo = document.getElementById("obstaculo");
const scoreText = document.getElementById("score");
const mensaje = document.getElementById("mensaje");

let puntos = 0;
let vivo = true;

// salto
document.addEventListener("keydown", function(e) {
    if (e.code === "Space" && !personaje.classList.contains("saltar")) {
        personaje.classList.add("saltar");

        setTimeout(() => {
            personaje.classList.remove("saltar");
        }, 500);
    }
});

// puntuación
setInterval(() => {
    if (vivo) {
        puntos++;
        scoreText.textContent = "Puntos: " + puntos;
    }
}, 1000);

// colisión
setInterval(() => {
    const personajeBottom = parseInt(window.getComputedStyle(personaje).getPropertyValue("bottom"));
    const obstaculoLeft = parseInt(window.getComputedStyle(obstaculo).getPropertyValue("left"));

    if (obstaculoLeft < 70 && obstaculoLeft > 30 && personajeBottom < 40) {
        mensaje.textContent = "¡Has perdido!";
        vivo = false;
        obstaculo.style.animation = "none";
    }
}, 50);