

document.getElementById("calculateMedian").addEventListener("click", calculateMedian)
document.getElementById("calculateMode").addEventListener("click", calculateMode)
document.getElementById("calculateAverage").addEventListener("click", calculateArithmeticMean)


document.getElementById("mode-id").style.display = "none";
document.getElementById("average-id").style.display = "none";
document.getElementById("median-id").style.display = "none";


function getList(){
    
    let separador = ",";
    let listString = document.getElementById("InputList");
    let aux = listString.value;
    let list1Aux = aux.split(separador);
    const list1 = list1Aux.filter(function(elemento){
        return elemento > 0;
    });
    
    return list1;
}

function calculateMode(){
    debugger;
    const list1Count = {};
    let list1 = getList();
    list1.map(
        function(element){
            if (list1Count[element]) {
                list1Count[element] += 1;
            }else{
            list1Count[element] = 1;
            }
        }
    );

    console.log(list1Count);
    const list1Array = Object.entries(list1Count);
    list1Array.sort(
        function(elementA ,elementB){
            return elementA[1] - elementB[1];
        }
    );
    console.log(list1Array);
    const mode = list1Array[list1Array.length-1];

    let aux = document.getElementById("showMode");
    aux.innerText="The mode of the list is: "+mode[0];
    document.getElementById("mode-id").style.display = "flex";


}





//Median

function calculateMedian(){
    debugger;
    let list1 = getList();

    const halfList1 = parseInt(list1.length/2);

    let median;

    list1.sort(function(a, b){return a - b}); 


    if (isEven(list1.length)) {
        const middle1 = parseInt(list1[halfList1-1]);
        const middle2 = parseInt(list1[halfList1]);
        const averageElement1and2 = (middle1 + middle2)/2
    
        median = averageElement1and2;
    
    } else {
        median = list1[halfList1]; 
    }

    let aux = document.getElementById("showMedian");
    aux.innerText="The median of the list is: "+median;
    document.getElementById("median-id").style.display = "flex";

}


function isEven(number){
    if (number % 2 === 0 ) {
        return true;
    }else{
        return false;
    }
}





//Average

function calculateArithmeticMean(){

    let list =getList();

    list.forEach(element => {
        parseInt(element);
    });
    console.log(list);

    const listSum = list.reduce(
        function(accumulatedValue = 0, newElement){
            let accumulatedValue1 = parseInt(accumulatedValue);
            let newElement1 = parseInt(newElement);
            return accumulatedValue1 + newElement1;
        }
    );
    
    const averageList = listSum / list.length;

    
    let aux = document.getElementById("showAverage");
    aux.innerText="The average of the list is: "+averageList;
    document.getElementById("average-id").style.display = "flex";
}