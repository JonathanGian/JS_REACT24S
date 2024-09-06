const type = document.querySelector("#type")

const formContainer = document.getElementsByClassName("form-container")

const checkboxes = document.getElementsByTagName("input");

const totalPrice =document.querySelectorAll("#totalPrice");


function getvalues() {
    totalValue = parseInt(type.value)
   
    console.log(totalValue,"total value at end")
    for (let box of checkboxes)
        totalValue += box.checked * +box.value;
    // Changing the text in the desired areas
    totalPrice[0].textContent ="$" + totalValue 
    totalPrice[1].textContent = "$" + totalValue
    
} 
// listening to any "change" that happens inside the area where things are happening
formContainer[0].addEventListener("change",getvalues)
