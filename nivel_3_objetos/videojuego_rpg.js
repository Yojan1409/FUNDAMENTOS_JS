let jugador1 = {
    nombre: "Xorus",
    vida: 100,
    fuerza: 30,
    nivel: 20,
    pocines: 1
};

let jugador2 = {
    nombre: "Bell",
    vida: 150,
    fuerza: 70,
    nivel: 60,
    pociones: 2
};

function entrenar(jugador1, jugador2) {
    jugador1.fuerza += 15;
    jugador1.vida -= 7;
    jugador1.pociones += 6;

    jugador2.fuerza += 10;
    jugador2.vida -= 5;
    jugador2.pociones += 4;

    console.log(jugador1.nombre + " y " + jugador2.nombre + " entrenan duramente contra una dragón, al vencerlo este les dropea pociones de vida así como su fuerza incrementa a " + jugador1.fuerza + " y " + jugador2.fuerza + ", respectivamente.");
}

function curarse(jugador1, jugador2) {
    jugador1.vida += 14;
    jugador1.pociones -= 1;
    jugador2.vida += 10;
    jugador2.pociones -= 1;


    console.log("Posteriormente " + jugador1.nombre + " y " + jugador2.nombre + " se curan con las pociones dropeadas; por lo tanto ahora tienen " + jugador1.vida + " y " + jugador2.vida + " de vida, según el orden.");
}

entrenar(jugador1, jugador2);
curarse(jugador1, jugador2);
