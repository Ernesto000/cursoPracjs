//codigo cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Lados miden: " + ladoCuadrado);

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("perimetro mide: " + perimetroCuadrado);

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("area mide: " + ladoCuadrado +"cm^2");
console.groupEnd();

//codigo triangulo
console.group("Triangulo");
const lTri1 = 6;
const lTri2 = 6;
const bTri = 4;
console.log(
    "triangulo mide: " 
    + lTri1 + "cm, " 
    + lTri2 + "cm, " 
    + bTri + "cm");
const aTri = 5.5;
console.log("Altura mide: " + aTri + "cm");
    
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("perimetro miden " + perimetroTriangulo);


function areaTriangulo(base, altura) {
    return (base *altura) /2;
}
//const areaTri = (bTri*aTri)/2;
//console.log("area miden: " + areaTri);

console.groupEnd();

//codigo del circulo

console.group("circulos");

const rCrcl = 4;
//const dCrcl = rCrcl*2;
const PI = Math.PI;
console.log(PI);

function dCrcl(radio) {
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = dCrcl(radio);
    return diametro * PI;
}
//const pCrcl = dCrcl*PI;
//console.log("perimetro miden " + pCrcl);
function areaCirculo(radio){
    return radio * radio;
}


//const aCrcl = (rCrcl * rCrcl)*PI;
//console.log("area miden: " + aCrcl);


console.groupEnd();

//interaccion con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro =perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area =areaCuadrado(value);
    alert(area);
};