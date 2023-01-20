/*
let scissors = document.getElementById("tijera");
let paper = document.getElementById("papel");
let stone = document.getElementById("piedra");
const elecciones = ["tijera", "papel", "piedra"];

// Escoge una opción aleatoria en un string para la CPU
function aleatorio(lista) {
  const decision = Math.floor(Math.random()*lista.length);
  return lista[decision];
}
//Imprime el resultado en textarea
function imprimeResultado(mensaje,id) {
  let item = document.getElementById(id);
  item.textContent = mensaje;
  item.classList.remove("text-yellow-400","text-green-400","text-red-400")
  console.log(mensaje);
}

//Compara tu elección con la de la mmáquina
function play(user) {
  let machine = aleatorio(elecciones);
  if (user == machine) {
    imprimeResultado("Empate","boxMessage");
    getElementById("boxMessage").classList.add("text-yellow-400");
  }else if (
    (user == "tijera" && machine == "papel") ||
    (user == "papel" && machine == "piedra") ||
    (user == "piedra" && machine == "tijera")
  ) {
    imprimeResultado("Ganaste","boxMessage");
    getElementById("boxMessage").classList.add("text-green-400");
  } else {
    imprimeResultado("Pierdes","boxMessage");
    getElementById("boxMessage").classList.add("text-red-400");
  }
}

//Compara tu elección con la de la mmáquina con operadores ternarios (solo ebe haber una funcion play)

function play(user) {
  let machine = aleatorio(elecciones);

  (machine == user) ? imprimeResultado("Empate","boxMessage"): 
    ((machine == "tijera" && user == "piedra") ||
    (machine == "piedra" && user == "papel")  ||
    (machine == "papel" && user == "tijera")) ?
    imprimeResultado("Ganaste", "boxMessage") :
    imprimeResultado("Perdiste", "boxMessage");
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
*/
let scissors = document.getElementById("tijera");
let paper = document.getElementById("papel");
let stone = document.getElementById("piedra");
const elecciones = ["tijera", "papel", "piedra"];

//Función eleccion de maquiná
function juegoDeMaquina(lista) {
  let decision = Math.floor(Math.random()* lista.length);
  return lista[decision];
}

//Función imprime el resultado
function imprimeResultado(mensaje,id) {
  let box = document.getElementById(id);
  box.textContent = mensaje;
}

//Función con swicth
function play(user) {
  let machine = juegoDeMaquina(elecciones);

  switch (user) { 
    case machine:
      imprimeResultado("Empate", "boxMessage");
      break;
    case "piedra":
      if (machine == "tijera") {
        imprimeResultado("Ganaste", "boxMessage");
      } else if (machine == "papel"){
        imprimeResultado("Perdiste", "boxMessage");
      }
      break;
    case "tijera":
      if (machine == "papel") {
        imprimeResultado("Ganaste","boxMessage");
      } else if (machine == "piedra") {
        imprimeResultado("Perdiste","boxMessage")
      }
      break;
    case "papel":
      if (machine == "piedra") {
        imprimeResultado("Ganaste","boxMessage");
      } else if (machine == "tijera"){
        imprimeResultado("Perdiste","boxMessage")
      }
      break;
    default:
      imprimeResultado("Valor no valido", "boxMessage")
      break;
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