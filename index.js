let cerrar = document.querySelectorAll("#cerrarA")[0];
let abrir = document.querySelectorAll("#ctaA")[0];
let modal = document.querySelectorAll(".cuadrado")[0];
let modalC = document.querySelectorAll("#ventanaA")[0];

let cerrarB = document.querySelectorAll("#cerrarB")[0];
let abrirB = document.querySelectorAll("#ctaB")[0];
let modalCB = document.querySelectorAll("#ventanaB")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity= "100";
    modalC.style.visibility= "visible";
    modalC.classList.toggle("mover");
});

cerrar.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity= "0";
    modalC.style.visibility= "hidden";
    modalC.classList.toggle("mover");
});

abrirB.addEventListener("click", function(e){
    e.preventDefault();
    modalCB.style.opacity= "100";
    modalCB.style.visibility= "visible";
    modalCB.classList.toggle("moverB");
});

cerrarB.addEventListener("click", function(e){
    e.preventDefault();
    modalCB.style.opacity= "0";
    modalCB.style.visibility= "hidden";
    modalCB.classList.toggle("moverB");
});

