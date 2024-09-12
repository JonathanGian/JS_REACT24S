const type = document.querySelector("#type")

const formContainer = document.getElementsByClassName("form-container")

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const radio = document.querySelector("input[type=radio]:checked")
const button = document.querySelector("#submitName")
const order = document.querySelector("#showOrder")
const totalPrice =document.querySelectorAll("#totalPrice");
const customer =document.querySelector("#userInfo")
let customerInfo = ""
console.log(order)
function userInfo(){
    customerInfo = customer.value
    
    customer.value =""

}
function showOrder(){
    alert(`Customer Name: ${customerInfo}
    Total Price: ${totalValue}`)
}



function getvalues() {
    //Checks which radio is selected every time a change happens
    const radio = document.querySelector("input[type=radio]:checked")
    totalValue = parseInt(type.value)
   
    console.log(totalValue,"total value at end")
    for (let box of checkboxes)
        totalValue += box.checked * +box.value;
    //Check if radio has a value or not and adds it to totalValue
    if (radio != null){
        totalValue += +radio.value
    }
    // Changing the text in the desired areas
    totalPrice[0].textContent ="$" + totalValue 
    totalPrice[1].textContent = "$" + totalValue
   
} 
// listening to any "change" that happens inside the area where things are happening
formContainer[0].addEventListener("change",getvalues)
button.addEventListener("click",userInfo)
order.addEventListener("click",showOrder)