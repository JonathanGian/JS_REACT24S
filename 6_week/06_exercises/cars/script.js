"use strict"

// To save info on the computer
let cars = JSON.parse(localStorage.getItem("cars"));
if (cars == undefined) {
    cars = []
    
}
// localStorage.clear() in the console will clear the storage

function Car(license,maker,model,owner,price,color,year) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
    this.year = year;
}




// Form inputs
const searchCarform = document.getElementById("search-bar")

const carForm = document.getElementById("carInfo")
const licensePlateInput = document.getElementById("licensePlate");
const makerInput = document.getElementById("maker");
const modelInput = document.getElementById("model");
const ownerInput = document.getElementById("currentOwner");
const priceInput = document.getElementById("price");
const colorInput = document.getElementById("color");
const yearInput = document.getElementById("year")
const addCarBtn = document.querySelector("#addCarBtn");

//End of form inputs





function getCarData(){
    
    event.preventDefault()
    if (priceInput.value <= 0) {
        alert("Invalid price")
        return
        
    }
    if (yearInput.value <= 1886 || yearInput.value >= 2024) {
        alert("Invalid car year: Must be between 1886-2024")
        return 
    }
    const newCar = new Car(licensePlateInput.value.trim(),makerInput.value,modelInput.value,ownerInput.value,priceInput.value,colorInput.value,yearInput.value);
    
    
    cars.push(newCar);
    localStorage.setItem("cars",JSON.stringify(cars));
    
   
    licensePlateInput.value = "";
    makerInput.value = "";
    modelInput.value = "";
    ownerInput.value = "";
    priceInput.value = "";
    colorInput.value = "";
    yearInput.value = "";
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

displayTable()
function licenseSearch(){
    // Taking the search input and trimming
    const searchInput = document.getElementById("searchbar").value.trim();

    event.preventDefault()
    //finding the div we will write the results to
    const resultsDiv = document.getElementById("results")
    //Making sure the input isnt empty
    if (searchInput === ""){
        resultsDiv.textContent = "Please enter a valid license plate."
        return
    }
    // Searching cars for license
    const result = cars.find(car => car.license.toLowerCase().toString() === searchInput.toLowerCase() );

    if (result) {
        resultsDiv.innerHTML =`
            <p><strong>Result Found:</strong></p><br>
            <p>License: ${result.license}, Maker: ${result.maker}, Model: ${result.model}, Owner: ${result.owner}, Price: ${result.price}, Color: ${result.color}, Year: ${result.year}</p>
        `;
    }else {
        resultsDiv.textContent = `No car was found with license plate: ${searchInput}`
    }
}

function resetInput(){
    licensePlateInput.value = ""
    makerInput.value = ""
    modelInput.value = ""
    ownerInput.value = "";
    priceInput.value = "";
    colorInput.value = "";
    yearInput.value = "";
}


carForm.addEventListener("submit",getCarData)


resetBtn.addEventListener("click",resetInput)
searchCarform.addEventListener("submit",licenseSearch)