/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

console.log("Hallo");

var postvakje = document.querySelector(".postvakje");

var hartje = document.getElementById("hartje");

var klokje = document.getElementById("klokje");

function fillHeart() {
    hartje.src = "img/hartje-gevuld.svg";
    hartje.classList.add('hartje');
    console.log("Gevuld");
}

hartje.addEventListener('click', fillHeart); /* hartje vult bij klik */

function unfillHeart() {
    hartje.src = "img/hartje.svg";
    console.log("Ongevuld");
}

hartje.addEventListener('dblclick', unfillHeart); /* roept functie aan om het verhaal te 'unliken' met dubbel klik */

function draaienKlokje() {
    klokje.src = "img/klokje-draaien.gif";
    console.log("Draaien");
}

klokje.addEventListener('mouseover', draaienKlokje); /* roept functie aan bij mouseover, gifje met ronddraaiende klok weergeeft */

function zoomIn() {
    postvakje.classList.add('zoom');
    console.log("Hallo!");
}

postvakje.addEventListener('mouseover', zoomIn); /*roept functie aan bij mouseover, postvakje wordt groter*/
