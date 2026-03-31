let jugador1 = {
    nombre: "Xorus",
    vida: 100,
    fuerza: 30,
    nivel: 30
};

let jugador2 = {
    nombre: "Bell",
    vida: 120,
    fuerza: 50,
    nivel: 50
};

function entrenar(jugador1, jugador2) {
    jugador1.fuerza += 15;
    jugador2.vida -= 7;

    jugador2.fuerza += 10;
    jugador2.vida -= 5;

    console.log(jugador1.nombre + " y " + jugador2.nombre + " entrenan duramente contra una dragón, siendo que ahora tienen " + jugador1.fuerza + " y " + jugador2.fuerza + " de fuerza, respectivamente.");
}

entrenar(jugador1, jugador2);