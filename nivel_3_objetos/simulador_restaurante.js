let cliente = {
    nombre: "Steve",
    dinero: 800,
    hambre: 50
};

function ordenarComida(cliente) {
    cliente.dinero -= 20;
    cliente.hambre -= 30;

    console.log(cliente.nombre + " ordenó comida en Burger King.");
}

function pagar(cliente) {
    console.log(cliente.nombre + " pagó su comida y ahora tiene " + cliente.dinero + " soles.");
}

function mostrarEstado(cliente) {
    console.log("Estado de " + cliente.nombre + ": dinero = " + cliente.dinero + ", hambre = " + cliente.hambre);
}

ordenarComida(cliente);
pagar(cliente);
mostrarEstado(cliente);