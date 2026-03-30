let nombreH1 = "Stark";
let poderH1 = "velocidad y alta resistencia";
let energiaH1 = 170;
let ciudadH1 = "América";
let enemigoH1 = "Ryu";
let superH1 = "golpe de embestida";

let nombreH2 = "Urano";
let poderH2 = "manipulación de la gravedad, así como super fuerza";
let energiaH2 = 120;
let ciudadH2 = "Lima";
let enemigoH2 = "Megatron";
let amigoH2 = "Ritta";
let superH2 = "Escudo gravitacional potenciado";

function ataqueH2() {
    console.log("El héroe " + nombreH2 + " va a la ciudad de " + ciudadH1 + " y ataca con su poder de " + poderH2 + " al también héroe " + nombreH1 + " en un suceso totalmente inesperado.");
}

function defensaH1() {
    console.log(nombreH1 + " al ver esto decide defenderse con su poder de " + poderH1 + ", pero debido a esta última habilidad hace que la energía de " + nombreH1 + " baje a " + (energiaH1 - 70) + " por ciento tras la defensa. ");
}

function revelacionH1() {
    console.log("En ese momento aparece " + amigoH2 + " y le informa a " + nombreH1 + " que " + nombreH2 + " está siendo controlado por " + enemigoH2 + " y " + enemigoH1);
}

function recargarEnergiaH1() {
    console.log("Entonces " + nombreH1 + " va a recargar su energía en la ciudad de " + ciudadH2 + " siendo que esta suba a " + (energiaH1 + 100) + " por ciento.");
}




// function superAtaqueH1() {
//     console.log("Posteriormente va donde " + nombreH2 + " y lo ataca con un " + superH1 + " haciendo que la energía de su rival baje a " + (energiaH2 - 100) + " por ciento.");
// }

// function superEscudoH2() {
//     console.log(nombreH2 + " al ver la poca energía que le quedaba decide usar su " + superH2 + ", subiendo la energía de su resistencia al máximo con un " + (energiaH2 + 80) + " por ciento.");
//}

ataqueH2();
defensaH1();
revelacionH1();
recargarEnergiaH1();

//superAtaqueH1();
//superEscudoH2();