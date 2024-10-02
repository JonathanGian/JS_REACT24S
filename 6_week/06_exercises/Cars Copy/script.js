"use strict"

// To save info on the computer
let cars = JSON.parse(localStorage.getItem("cars"));
if (cars == undefined) {
    cars = []
    
}
// localStorage.clear() in the console will clear the storage

function Car(license,maker,model,owner,price,discount,color,year) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.discount = discount
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

// Discount function
function discount(price){
    const discountRate = 0.85
    return price * discountRate
}



function getCarData(){
    // Im using the resultsDiv from the search engine to display errors
    const resultsDiv = document.getElementById("results")
    const price = Number.parseInt(priceInput.value.trim(), 10)

    event.preventDefault()
    try {
        if (price <= 0) {
            resultsDiv.innerHTML = "<strong>Price is not vaild(Enter a number above 0)</strong>";
            resultsDiv.style.color = "red";
        throw new RangeError("Price is not valid");
        
    }
    // This is never triggered but I put it in as a backup
    if (yearInput.value < 1886 || yearInput.value > 2024) {
        resultsDiv.innerHTML = "<strong>Year must be between 1886-2024</strong>";
        resultsDiv.style.color ="red";
        throw new Error("Year must be between 1886-2024");
        
    }
    if (yearInput.value >= 2014) {
       const discountedPrice = discount(price)
        // Pushing the new Car with a discounted price 
       const newCar = new Car(licensePlateInput.value.trim(),makerInput.value,modelInput.value,ownerInput.value,price,discountedPrice,colorInput.value,yearInput.value);
       
       cars.push(newCar)
    }else{
        // Making a new Car without discounted price
        const newCar = new Car(licensePlateInput.value.trim(),makerInput.value,modelInput.value,ownerInput.value,price,price,colorInput.value,yearInput.value);
        
        cars.push(newCar);

    }

    licensePlateInput.value = "";
    makerInput.value = "";
    modelInput.value = "";
    ownerInput.value = "";
    priceInput.value = "";
    colorInput.value = "";
    yearInput.value = ""; 
    localStorage.setItem("cars",JSON.stringify(cars));
    
    displayTable()

    } catch (error) {
        console.error("Caught an error:", error.message)
       
    }
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
    
    const searchInput = document.getElementById("searchbar").value.trim();

    event.preventDefault()
    
    const resultsDiv = document.getElementById("results")
    
    if (searchInput === ""){
        resultsDiv.textContent = "Please enter a valid license plate."
        return
    }
   
    const result = cars.find(car => car.license.toLowerCase().toString() === searchInput.toLowerCase() );

    if (result && result.price != result.discount) {
        resultsDiv.innerHTML =`
            <p><strong>Result Found:</strong></p><br>
            <output>License: ${result.license}, Maker: ${result.maker}, Model: ${result.model}, Owner: ${result.owner}, Original Price: ${result.price},Discounted Price: ${result.discount}, Color: ${result.color}, Year: ${result.year}</output>`
        
        }
        else if (result && result.price == result.discount) {
        resultsDiv.innerHTML =`
            <p><strong>Result Found:</strong></p><br>
            <output>License: ${result.license}, Maker: ${result.maker}, Model: ${result.model}, Owner: ${result.owner}, Price: ${result.price}, Color: ${result.color}, Year: ${result.year}</output>
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