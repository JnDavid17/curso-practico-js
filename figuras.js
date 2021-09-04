console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden "+ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado*4;
}
//console.log("El perimetro del cuadrado es "+perimetroCuadrado + "cm" );

function areaCuadrado(lado){
    return lado*lado;
}

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
//console.log("El area del cuadrado es "+areaCuadrado + "cm^2");
console.groupEnd();
//Codigo del triangulo

console.group("Triangulos")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4 ;

//console.log(
//"Los lados del triangulo miden "
//+ladoTriangulo1 + "cm, "
//+ladoTriangulo2+"cm, "
//+baseTriangulo+"cm"
//);
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: "+alturaTriangulo+ "cm");

function perimetroTriangulo (lado1, lado2, base){
    let lado1Num = parseInt(lado1);
    let lado2Num = parseInt(lado2);
    let lado3Num = parseInt(base);
    return lado1Num + lado2Num + lado3Num;
}
//const perimetroTriangulo =     ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");


function areaTriangulo(base,height){

    return (base*height)/2;
}

function alturaTrianguloIsosceles(lado1,base){

    let value1 = parseInt(Math.pow(lado1,2));
    let aux = parseInt(base);
    aux = base/2;
    value2 = Math.pow(aux,2);

    let heightAux = value1 - value2;
    let height = Math.sqrt(heightAux);
    return height;
}


//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es "+areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo

console.group("Circulos")

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es "+radioCirculo + "cm" );


//Diametro

function diametroCirculo(radio){
    return radio*2;
}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es "+diametroCirculo + "cm" );

const PI = Math.PI;



//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es "+perimetroCirculo + "cm" );

//Area

function areaCirculo(radio){
    return (radio*radio)*PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es "+areaCirculo + "cm^2");


console.groupEnd();

//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

//Triangulo

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangle");
    const input2 = document.getElementById("InputTriangle2");
    const input3 = document.getElementById("InputTriangle3");
    
    const value = input.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro)
}

function calcularAreaTrianguloIsosceles(){
    debugger;
    const input = document.getElementById("InputTriangle-iso");
    const input2 = document.getElementById("InputTriangle2-iso");
    const input3 = document.getElementById("InputTriangle3-iso");
    
    const value = input.value;
    const value2 = input2.value;
    const value3 = input3.value;

    if (value != value2) {
        alert("Please, this exercise needs sid A and side C to be the same")
    } else if (value===value2){
        const altura = alturaTrianguloIsosceles( value, value3);
        const area = areaTriangulo(value3,altura);
        alert(area)
    }
 
}

function calcularAreaTriangulo(){
    debugger;
    const input3 = document.getElementById("InputTriangle3");
    const input4 = document.getElementById("InputTriangle4");
    
    const value3 = input3.value;
    const value4 = input4.value;


    const area = areaTriangulo(value3, value4);
    alert(area)
}

//Circulo

function calcularDiametroCirculo(){
    debugger;
    const input = document.getElementById("InputCircle");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro)
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCircle");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCircle");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

document.getElementById("buttonPerimetroSquare").addEventListener("click",calcularPerimetroCuadrado)
document.getElementById("buttonAreaSquare").addEventListener("click", calcularAreaCuadrado)

document.getElementById("buttonPerimetroTriangle").addEventListener("click",calcularPerimetroTriangulo)
document.getElementById("buttonAreaTriangle").addEventListener("click", calcularAreaTriangulo)

document.getElementById("buttonDiametroCircle").addEventListener("click",calcularDiametroCirculo)
document.getElementById("buttonPerimetroCircle").addEventListener("click",calcularPerimetroCirculo)
document.getElementById("buttonAreaCircle").addEventListener("click", calcularAreaCirculo)

document.getElementById("buttonAreaTriangle-iso").addEventListener("click", calcularAreaTrianguloIsosceles)
