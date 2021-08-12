
let baseTriangulo;
let ladoTriangulo;
let altura;
function calcularAltura() {
    let inputBase = document.getElementById("base");
    let inputLado = document.getElementById("ladoAdyacente");
    baseTriangulo = parseInt(inputBase.value)/2;
    ladoTriangulo = parseInt(inputLado.value);
    altura = Math.sqrt((ladoTriangulo*ladoTriangulo)-(baseTriangulo*baseTriangulo))
    altura = Math.round(altura);
    let result = document.getElementById("resultado");
    result.innerHTML = "Altura: " + altura;
}