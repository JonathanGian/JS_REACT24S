/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/
const button = document.querySelector("#addFruitBtn")


const list = document.querySelector("#fruitList")

const input = document.querySelector("#fruitInput");



function fruitList() {
    //this is printing out whatever someone writes into the input box
console.log(input.value);   
// this is declaring the variable newElement which is a list item
const newElement = document.createElement("li");

//turning our new li varible into the users input
newElement.textContent = input.value;

// adds the newElement to the list
list.appendChild(newElement)
// returns the boxes value to empty
input.value = ""
}

button.addEventListener("click", fruitList)

