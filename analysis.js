document.getElementById("showPerson").addEventListener("click",initialize);

document.getElementById("hideThis").style.display= "none";

function initialize(){
    console.log(colombia);

    let aux = document.getElementById("inputCountrySearch");

    let country = aux.value;

    if (country === "Colombia") {
        if (colombia.length === 0 ) {
            alert("Please fill the Colombia object")
        }else{
            let auxList = colombia.slice();
            normalSalaries(colombia);
            top10(auxList)
            console.log(colombia);
        }


    } else if (country === "Peru"){
        if (peru.length === 0 ) {
            alert("Please fill the Peru object")
        }else{
            normalSalaries(peru);
            top10(peru)
            medianSalaries(peru);
        }

    }else if (country === "Estados Unidos") {
        if (usa.length === 0 ) {
            alert("Please fill the USA object")
        }else{
            normalSalaries(usa);
            top10(usa)
            medianSalaries(usa);
        }

    }else if (country === "Argentina") {
        if (argentina.length === 0 ) {
            alert("Please fill the Argentina object")
        }else{
            normalSalaries(argentina);
            top10(argentina)
            medianSalaries(argentina);
        }

    }else if (country === "Brasil") {
        if (brasil.length === 0 ) {
            alert("Please fill the Brasil object")
        }else{
            normalSalaries(brasil);
            top10Salaries(brasil)
            medianSalaries(brasil);
        }

    }
}



//Helpers
function isEven(number){
    return (number % 2 === 0);
}

function sorted(list){
    let salaries = list.map(
        function(person){
            return person.salaryPerson;
        }
    );
    
    let sortedSalaries = salaries.sort(
        function(a, b){
            return a - b;
        }
    );

    return sortedSalaries;
}


//Median Calculator

function medianSalaries(list, isTopTen){

    let auxList = list;

    let sortedSalaries = sorted(auxList);

    const halfList = parseInt(sortedSalaries.length / 2);
    if(isEven(sortedSalaries.length)){
        const halfPerson1 = parseInt(sortedSalaries[halfList-1]);
        const halfPerson2 = parseInt(sortedSalaries[halfList]);

        const averageHalfPerson= (halfPerson1 + halfPerson2)/2;

        if (isTopTen) {
            let aux2 = document.getElementById("topMedianeSalaries")
            aux2.innerText = "$"+averageHalfPerson
        }else{
            let aux = document.getElementById("medianeSalaries")
            aux.innerText = "$"+averageHalfPerson;
    
        }
    }else{
        const halfPerson =  sortedSalaries[halfList];
        if (isTopTen) {
            let aux2 = document.getElementById("topMedianeSalaries")
            aux2.innerText = "$"+halfPerson
        }else{
            let aux = document.getElementById("medianeSalaries")
            aux.innerText = "$"+halfPerson;
    
        }

    }

    console.log(list);
}



//General Median




// Top 10% median

function top10(list){
    let aux = document.getElementById("salaryPercentage");

    percentage = aux.value;


    let auxList = list;

    if(percentage > 100){
        percentage = 100;
    }

    let realPercentage = 100 - percentage;

    let sortedSalaries = auxList.sort(
        function(a, b){
            return b.salaryPerson - a.salaryPerson ;
        }
    );
    
    let spliceStart = parseInt((sortedSalaries.length * realPercentage)/100);
    let spliceCount = parseInt(sortedSalaries.length - spliceStart);

    let auxTop10Salaries = sortedSalaries.splice(
        spliceStart,
        spliceCount,
    )

    let condition = true;
    while (condition) {
        let child = document.getElementById("topNameFill");
        let child2 = document.getElementById("topSalaryFill");
        let child3 = document.getElementById("topCountryFill");
        if (child) {
            child.parentNode.removeChild(child);
        }else{
            condition = false;
        }

        if (child2) {
            child2.parentNode.removeChild(child2);
        }

        if (child3) {
            child3.parentNode.removeChild(child3);

        }
    }

    let top10Salaries = auxTop10Salaries.sort(
        function(a, b){
            return b.salaryPerson - a.salaryPerson ;
        }
    );

    top10Salaries.forEach(element => {

            let aux = document.getElementById("topName");
            let div = document.createElement("div");
            div.className = 'nameFill';
            div.id = 'topNameFill'
            div.innerText = element.namePerson;
            aux.appendChild(div);
            
            
            let aux2 = document.getElementById("topSalary");
            let div2 = document.createElement("div");
            div2.className = 'salaryFill';
            div2.id = 'topSalaryFill'
            div2.innerText = element.salaryPerson;
            aux2.appendChild(div2);
    
            let aux3 = document.getElementById("topCountry");
            let div3 = document.createElement("div");
            div3.className = 'countryFill';
            div3.id = 'topCountryFill'
            div3.innerText = element.countryPerson;
            aux3.appendChild(div3);

        });

        let countryTitle = document.getElementById("inputCountrySearch");
        let auxValueTitle = countryTitle.value;
        let auxTitle = document.getElementById("salariesTopTen");
        auxTitle.innerText = "Salaries of the top 10 employees in "+auxValueTitle;


        console.log(list);

    medianSalaries(top10Salaries, true );
}


// General salaries 

function normalSalaries(list){

    document.getElementById("hideThis").style.display= "flex";
    
    let example = list;



    let condition = true;
    while (condition) {
        let child = document.getElementById("normalNameFill");
        let child2 = document.getElementById("normalSalaryFill");
        let child3 = document.getElementById("normalCountryFill");
        if (child) {
            child.parentNode.removeChild(child);
        }else{
            condition = false;
        }

        if (child2) {
            child2.parentNode.removeChild(child2);
        }

        if (child3) {
            child3.parentNode.removeChild(child3);

        }
    }

    example.forEach(element => {
        let aux = document.getElementById("normalName");
        let div = document.createElement("div");
        div.className = 'nameFill';
        div.id = 'normalNameFill'
        div.innerText = element.namePerson;
        aux.appendChild(div);
        
        let aux2 = document.getElementById("normalSalary");
        let div2 = document.createElement("div");
        div2.className = 'salaryFill';
        div2.id = 'normalSalaryFill'
        div2.innerText = element.salaryPerson;
        aux2.appendChild(div2);

        let aux3 = document.getElementById("normalCountry");
        let div3 = document.createElement("div");
        div3.className = 'countryFill';
        div3.id = 'normalCountryFill'
        div3.innerText = element.countryPerson;
        aux3.appendChild(div3);
    });

    let countryTitle = document.getElementById("inputCountrySearch");
    let auxValueTitle = countryTitle.value;
    let auxTitle = document.getElementById("salariesPersonal");
    auxTitle.innerText = auxValueTitle+" employee salaries";

    medianSalaries(example,false);
}