let seleccionUsuarioActual = null;

/* Función con la lógica del piedra, papel o tijeras. */
function jugar() {
  const opciones = ["piedra", "papel", "tijera"];
  const seleccionUsuario = seleccionUsuarioActual;
  const seleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

  const resultado = determinarResultado(seleccionUsuario, seleccionMaquina);
  actualizarPantalla(seleccionUsuario, seleccionMaquina, resultado);
}

/* Función para alojar la elección del usuario y replicarla en su hueco correspondiente. */
function seleccionUsuario(opcion) {
  seleccionUsuarioActual = opcion;
  // Actualizar la imagen en el section 4 con la selección del usuario
  const seccion4 = document.getElementById("section4");
  const imagenEnSection4 = seccion4.querySelector("img");
  const rutaImagen = obtenerRutaImagen(opcion);
  imagenEnSection4.src = rutaImagen;
}

/* Función que obtiene la ruta de las imágenes */
function obtenerRutaImagen(opcion) {
  const rutas = {
    piedra: "img/rock.png",
    papel: "img/paper.png",
    tijera: "img/scissors.png",
  };
  return rutas[opcion];
}

/* Función para mostrar el resultado del juego. (Buscar imagen para el empate) */
function determinarResultado(seleccionUsuario, seleccionMaquina) {
  const seccion5 = document.getElementById("section5");
  const imagenResultado = seccion5.querySelector("img");

  if (seleccionUsuario === seleccionMaquina) {
    playOk();
    imagenResultado.src = "img/draw.png";
  } else if (
    (seleccionUsuario === "piedra" && seleccionMaquina === "tijera") ||
    (seleccionUsuario === "papel" && seleccionMaquina === "piedra") ||
    (seleccionUsuario === "tijera" && seleccionMaquina === "papel")
  ) {
    imagenResultado.src = "img/win.png";
    playWin();
  } else {
    imagenResultado.src = "img/lose.png";
    playLose();
  }
}

/* Función que actualiza la pantalla de la máquina con los resultados. */
function actualizarPantalla(seleccionUsuario, seleccionMaquina, resultado) {
  const seccion6 = document.getElementById("section6");

  // Muestra la selección de la máquina en el section 6
  const imagenEnSection6 = seccion6.querySelector("img");
  const rutaImagenMaquina = obtenerRutaImagen(seleccionMaquina);
  imagenEnSection6.src = rutaImagenMaquina;

  const seccion5 = document.getElementById("section5");
  const imagenResultado = seccion5.querySelector("img");

  if (seleccionUsuario === seleccionMaquina) {
    imagenResultado.src = "img/draw.png";
  } else if (
    (seleccionUsuario === "piedra" && seleccionMaquina === "tijera") ||
    (seleccionUsuario === "papel" && seleccionMaquina === "piedra") ||
    (seleccionUsuario === "tijera" && seleccionMaquina === "papel")
  ) {
    imagenResultado.src = "img/win.png";
  } else {
    imagenResultado.src = "img/lose.png";
  }
}

/* Función para que suene fight cuando le das al botón */

function playAudio() {
  new Audio("sounds/fight.mp3").play();
}
/* Función para que suene victoria cuando ganas */
function playWin(){
  new Audio("sounds/win.mp3").play();
}

/* Función para que suene derrota cuando pierdas */
function playLose(){
  new Audio("sounds/lose.mp3").play();
}

/*Función para que suene ok cuando empate*/
function playOk(){
  new Audio("sounds/ok.mp3").play();
}
