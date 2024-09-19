"use strict"

function Car(license,maker,model,owner,price,color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
}




// Form inputs
const searchCarform = document.getElementById("search-bar")

const licensePlateInput = document.getElementById("licensePlate");
const makerInput = document.getElementById("maker");
const modelInput = document.getElementById("model");
const ownerInput = document.getElementById("currentOwner");
const priceInput = document.getElementById("price");
const colorInput = document.getElementById("color");
//End of form inputs

const addCarBtn = document.querySelector("#addCarBtn");
const resetBtn = document.querySelector("#resetBtn");
const cars =[];




function getCarData(){
    
    const newCar = new Car(licensePlateInput.value,makerInput.value,modelInput.value,ownerInput.value,priceInput.value,colorInput.value);
    
    
    cars.push(newCar);
    console.log(cars,"cars");
    console.log(newCar,"newCar")
    
    licensePlateInput.value = "";
    makerInput.value = "";
    modelInput.value = "";
    ownerInput.value = "";
    priceInput.value = "";
    colorInput.value = "";
    displayTable()
    
}
const displayTable = () =>{
    const table = document.querySelector("#carsTable");
    table.innerHTML = table.rows[0].innerHTML;
    cars.forEach(car =>{
        const row = table.insertRow(-1);

        Object.values(car).forEach(text => {
            const cell = row.insertCell(-1);
            cell.textContent = text;
        })
    })
}

function carSearch(){
console.log(searchCarform.value)
}

function reset(){
    licensePlateInput.value = ""
    makerInput.value = ""
    modelInput.value = ""
    ownerInput.value = ""
    priceInput.value = ""
    colorInput.value = ""
}



addCarBtn.addEventListener("click",getCarData)
resetBtn.addEventListener("click",reset)
searchCarform.addEventListener("input",carSearch)