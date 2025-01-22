var direccionMostrada = -1;
var secretariaMostrada = -1;

var init = function () {
    verSecretaria(secretariaInicial);
    verDireccion(direccionInicial);
}

function verSecretaria(n) {
    var secretaria = document.getElementById("secretaria" + secretariaMostrada);
    var direccion = document.getElementById("direccion" + direccionMostrada);

    if (secretaria != undefined) {
        secretaria.style.display = "none";
    }
    if (direccion != undefined) {
        direccion.style.display = "none";
        direccionMostrada = -1;
    }

    secretariaMostrada = n;

    document.getElementById("secretaria" + secretariaMostrada).style.display = "block";
}

function verDireccion(n) {
    var direccion = document.getElementById("direccion" + direccionMostrada);

    if (direccion != undefined) {
        direccion.style.display = "none";
    }

    direccionMostrada = n;

    document.getElementById("direccion" + direccionMostrada).style.display = "block";
}

function redirectHome() {
    window.location.href = 'Indice.html';
}