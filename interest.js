document.getElementById("simple-button").addEventListener("click", simpleInterest)
document.getElementById("compound-button").addEventListener("click", compoundInterest)

document.getElementById("simple").addEventListener("click", activeSimpleButton)
document.getElementById("compound").addEventListener("click", activeCompoundButton)

document.getElementById("simple-interest").style.display = "none";
document.getElementById("compound-interest").style.display = "none";

document.getElementById("resultSimple").style.display = "none";
document.getElementById("resultCompound").style.display = "none";


function activeSimpleButton(){
    document.getElementById("compound-interest").style.display = "none";
    document.getElementById("simple-interest").style.display = "flex";
    document.getElementById("resultCompound").style.display = "none";
}

function activeCompoundButton(){
    document.getElementById("simple-interest").style.display = "none";
    document.getElementById("compound-interest").style.display = "flex";
    document.getElementById("resultSimple").style.display = "none";

}

function simpleInterest(){
    let aux1 = document.getElementById("inputCapitalSimple");
    let aux2 = document.getElementById("inputTimeSimple");
    let aux3 = document.getElementById("inputInterestSimple");

    let capital = parseInt(aux1.value);
    let time = parseInt(aux2.value);
    let interest = parseFloat(aux3.value);
    interest = interest/100;
    let interestCalculate = capital*time*interest;
    debugger;
    let aux = numberWithCommas(interestCalculate);
    console.log(aux);

    let aux4 = interestCalculate + capital;
    let aux5 = numberWithCommas(aux4);
    document.getElementById("resultSimple").style.display = "flex";
    let show = document.getElementById("showResultSimple");
    show.innerText="$"+aux;

    let show2 = document.getElementById("simpleAccumulate");
    show2.innerText="$"+aux5;
}

function compoundInterest(){
    let aux1 = document.getElementById("inputCapitalCompound");
    let aux2 = document.getElementById("inputTimeCompound");
    let aux3 = document.getElementById("inputInterestCompound");

    let capital = parseInt(aux1.value);
    let time = parseInt(aux2.value);
    let interest = parseFloat(aux3.value);
    console.log(interest);
    interest = interest/100;
    let exponential = Math.pow(1+interest,time); 
    let interestCalculate = capital*exponential;
    let interestCalculate2 = Math.trunc(interestCalculate);

    let aux = numberWithCommas(interestCalculate2);
    console.log(aux);

    let aux4 = interestCalculate2 - capital ;
    let aux5 = numberWithCommas(aux4);

    document.getElementById("resultCompound").style.display = "flex";
    let show1 = document.getElementById("showResultCompound");
    show1.innerText="$"+aux5;

    
    let show2 = document.getElementById("compoundAccumulate");
    document.write = "hola";
    show2.innerText = "$"+aux;
    

}

function numberWithCommas(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}