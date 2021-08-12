//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
console.groupEnd();

//Código del círculo
console.group("Círculos");

function perimetroCirculo(radio){
    return radio * 2 * Math.PI;
}
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}
console.groupEnd();

function calcularPerimetroCuadrado(){
    let input = document.getElementById("InputCuadrado");
    let result = input.value;
    let final_result = perimetroCuadrado(result);
    alert(final_result);
}
function calcularAreaCuadrado(){
    let input = document.getElementById("InputCuadrado");
    let result = input.value;
    let final_result = areaCuadrado(result);
    alert(final_result);
}


