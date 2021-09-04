
document.getElementById("button-form-one").addEventListener("click",createPerson);

  const colombia = [];
  const peru = [];
  const usa = [];
  const argentina = [];
  const brasil = [];

function createPerson(){
  debugger;
  let aux = document.getElementById("inputName");
  let aux2 = document.getElementById("inputCountry");
  let aux3 = document.getElementById("inputSalary");
  let aux4 = document.getElementById("ID");

  let stop = false;
  let name = aux.value;
  let country = aux2.value;
  let salary = parseInt(aux3.value);
  let ID = aux4.value;

  if (country === "Colombia") {

    if(name === "" || ID === "" || isNaN(salary)){

    }else{

      stop = colombia.some(function(arrVal) {
        return ID === arrVal.idPerson;
      });
  
      if (!stop) {
        colombia.push({
          namePerson: name,
          countryPerson: country,
          salaryPerson: salary,
          idPerson: ID,
        });
      }
    }



  }else if (country ==="Peru") {

    if(name === "" || ID === "" || isNaN(salary)){

    }else{
      stop = peru.some(function(arrVal) {
        return ID === arrVal;
      });
      if (!stop) {
        peru.push({
          namePerson: name,
          countryPerson: country,
          salaryPerson: salary,
          idPerson: ID,
        });
      }
    
    }


  }else if (country ==="Estados Unidos") {

    if(name === "" || ID === "" || isNaN(salary)){

    }else{
      
      stop = usa.some(function(arrVal) {
        return ID === arrVal;
      });
  
      if (!stop) {
        usa.push({
          namePerson: name,
          countryPerson: country,
          salaryPerson: salary,
          idPerson: ID,
        });
      }
    }


  }else if (country ==="Argentina") {

    if(name === "" || ID === "" || isNaN(salary)){

    }else{
      stop = argentina.some(function(arrVal) {
        return ID === arrVal;
      });
  
      if (!stop) {
        argentina.push({
          namePerson: name,
          countryPerson: country,
          salaryPerson: salary,
          idPerson: ID,
        });
      }
      
    }
    

  }else if (country ==="Brasil") {

    if(name === "" || ID === "" || isNaN(salary)){

    }else{
      
      stop = brasil.some(function(arrVal) {
        return ID === arrVal;
      });
  
      if (!stop) {
        brasil.push({
          namePerson: name,
          countryPerson: country,
          salaryPerson: salary,
          idPerson: ID,
        });
      }
    }


  }


  console.log(colombia, peru, usa, argentina, brasil);
}