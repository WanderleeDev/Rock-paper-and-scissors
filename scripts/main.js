let scissors = document.getElementById("tijera");
let paper = document.getElementById("papel");
let stone = document.getElementById("piedra");
let box = document.getElementById("boxMessage");
const elecciones = ["tijera", "papel", "piedra"];


// Escoge una opción aleatoria en un string
function aleatorio(lista) {
  const decision = Math.floor(Math.random()*lista.length);
  return lista[decision];
}

//Imprime el resultado en textarea
function imprimeResultado(mensaje,id) {
  let box = document.getElementById(id);
  box.textContent = mensaje;
  box.classList.remove("text-yellow-400","text-green-400","text-red-400")
  console.log(mensaje);
}
//Compara tu elleccion con la de la mmáquina
function play(user) {
  let machine = aleatorio(elecciones);
  if (user == machine) {
    imprimeResultado("Empate","boxMessage");
    box.classList.add("text-yellow-400");
  }else if (
    (user == "tijera" && machine == "papel") ||
    (user == "papel" && machine == "piedra") ||
    (user == "piedra" && machine == "tijera")
  ) {
    imprimeResultado("Ganaste","boxMessage");
    box.classList.add("text-green-400");
  } else {
    imprimeResultado("Pierdes","boxMessage");
    box.classList.add("text-red-400");
  }
}

scissors.addEventListener("click", function () {
  play("tijera");
});
paper.addEventListener("click", function () {
  play("papel");
});
stone.addEventListener("click", function () {
  play("piedra");
});