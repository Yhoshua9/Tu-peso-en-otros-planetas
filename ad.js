const mercurio = 3.7;
const venus = 8.87;
const tierra = 9.8;
const marte = 3.7;
const jupiter = 24.8;
const saturno = 10.44;
const urano = 8.87;
const neptuno = 11.15;

const usuario = prompt("Cual es tu peso?");

let peso = parseFloat(usuario);
let pesoFinal;
let nombre;
function reiniciarJuego() {
    location.reload()
}

function calcularPesoMercurio() {
    let pesoFinal = peso * mercurio / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Mercurio es <strong>" + pesoFinal + " kilos</strong>";
}
function calcularPesoVenus() {
    let pesoFinal = peso * venus / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Venus es <strong>" + pesoFinal + " kilos</strong>";
}
function calcularPesoTierra() {
    let pesoFinal = peso * tierra / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en la Tierra es <strong>" + pesoFinal + " kilos</strong>";
}
function calcularPesoMarte() {
    let pesoFinal = peso * marte / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Marte es <strong>" + pesoFinal + " kilos</strong>";
}
function calcularPesoJupiter() {
    let pesoFinal = peso * jupiter / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Jupiter es <strong>" + pesoFinal + " kilos</strong>";
}
function calcularPesoSaturno() {
    let pesoFinal = peso * saturno / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Saturno es <strong>" + pesoFinal + " kilos</strong>";
}
function calcularPesoUrano() {
    let pesoFinal = peso * urano / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Urano es <strong>" + pesoFinal + " kilos</strong>";
}
function calcularPesoNeptuno() {
    let pesoFinal = peso * neptuno / tierra;
    pesoFinal = parseFloat(pesoFinal).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Neptuno es <strong>" + pesoFinal + " kilos</strong>";
}


//intento por reduccir las funciones y hacer solo una para calcular el peso
/*class Planeta {
    constructor (nombre, gravedad) {
        this.id = nombre
        this.gravedad = gravedad
    }
    
}
let mercurio = new Planeta ("Mercurio",3.7);
let venus = new Planeta ("Venus",8.87) ;
let tierra = new Planeta ("Tierra",9.8) ;
let marte = new Planeta ("Marte",3.7) ;
let jupiter = new Planeta ("Jupiter",24.8);
let saturno = new Planeta ("Saturno",10.44);
let urano = new Planeta ("Urano",8.87);
let neptuno = new Planeta ("Neptuno",11.15);
let usuario = prompt("Cual es tu peso?");

let peso = parseFloat(usuario);
let pesoFinal;
function reiniciarJuego() {
    location.reload()
}

function calcularPeso () {
    let pesoFinalPlaneta = peso * Planeta.gravedad / tierra;
    pesoFinal = parseFloat(pesoFinalPlaneta).toFixed(2);
    document.getElementById("resultado").innerHTML = "Tu peso en Mercurio es <strong>" + pesoFinal + " kilos</strong>";
}
*/

/*function calcularPeso (){
    if (planeta == 1) {
        pesoFinal = peso * mercurio / tierra;
        nombre = "Mercurio";
    } 
    else if (planeta == 2) {
        pesoFinal = peso * venus / tierra;
        nombre = "Venus";
    } 
    else if (planeta == 3) {
        pesoFinal = peso;
        nombre = "Tierra";
    }
    else if (planeta == 4) {
        pesoFinal = peso * marte / tierra;
        nombre = "Marte";
    }
    else if (planeta == 5) {
        pesoFinal = peso * jupiter / tierra;
        nombre = "Jupiter";
    }
    else if (planeta == 6) {
        pesoFinal = peso * saturno / tierra;
        nombre = "Saturno";
    }
    else if (planeta == 7) {
        pesoFinal = peso * urano / tierra;
        nombre = "Urano";
    }
    else if (planeta == 8) {
        pesoFinal = peso * neptuno / tierra;
        nombre = "Neptuno";
    }
    else {
        alert ("Elige un planeta")
        reiniciarJuego()
    }
}*/