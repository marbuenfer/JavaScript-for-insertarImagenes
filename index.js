window.onload = inicio;
let fresa = "images/fresa.png";
let limon = "images/limon-200.png";
let caja;

function inicio() {
  caja = document.querySelector("#caja");
  document.querySelectorAll("button")[0].onclick = unaFresa;
  document.querySelectorAll("button")[1].onclick = cuatroLimones;
  document.querySelectorAll("button")[2].onclick = cambiaLimonesaFresas;
  document.querySelectorAll("button")[3].onclick = cambiaFresasaLimones;
  document.querySelectorAll("button")[4].onclick = eliminarFresas;
  document.querySelectorAll("button")[5].onclick = vaciar;
}

function unaFresa() {
  //Esta función añade una fresa a la caja
  caja.insertAdjacentHTML("beforeend", `<img class="fresa" src ="${fresa}">`);
  console.log("unafresa");
}

function cuatroLimones() {
  //Esta función añade cuatro limones a la caja
  for (let i = 0; i <= 3; i++) {
    caja.insertAdjacentHTML("beforeend", `<img class="limon" src ="${limon}">`);
  }
}

function cambiaLimonesaFresas() {
  //Esta función cambia limones por fresas
  let imagenesACambiar = document.querySelectorAll(".limon");
  for (let i = 0; i <= imagenesACambiar.length - 1; i++) {
    imagenesACambiar[i].src = fresa;
    imagenesACambiar[i].className = "fresa";
  }
}

function cambiaFresasaLimones() {
  //Esta función cambia fresas por limones
  let imagenesACambiar = document.querySelectorAll(".fresa");
  for (let i = 0; i <= imagenesACambiar.length - 1; i++) {
    imagenesACambiar[i].src = limon;
    imagenesACambiar[i].className = "limon";
  }
}

function eliminarFresas() {
  let imagenesACambiar = document.querySelectorAll(".fresa");
  for (let i = 0; i <= imagenesACambiar.length - 1; i++) {
    console.log(imagenesACambiar[i].className);
    imagenesACambiar[i].remove();
  }
}
function vaciar() {
  caja.innerHTML = "";
}
