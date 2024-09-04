
const myId = document.getElementById("myId")
const mySecondId = document.querySelector("#myId")
const myClass = document.getElementsByClassName("myClass")
const mySecondClass = document.querySelectorAll(".myClass")
const myParagraph = document.getElementsByName("p")
const myClassSecond = document.querySelector(".myClass")

const headline = document.querySelector('h1')

const button = document.querySelector("#buttonId")
let newElement = document.createElement("li")

console.log(button)
console.log(myId);
console.log(myClass);
console.log(myParagraph);
console.log(mySecondId);
console.log(mySecondClass);
console.log(myClassSecond);
console.log(headline.textContent)
function myFunction() {
    console.log("This was triggered by HTML")
    headline.textContent = "what she just did?!?!"
    button.style.color = "green"
}

function secondFunction() {
    console.log("This was triggered by addEventListener")
    headline.textContent = "I fixed it"
    button.textContent = "fix it"
    button.style.color = "red"
    headline.style.fontSize = "100px"
    headline.style.backgroundColor = "yellow"
    /* headline.remove() */
    list.append.Child(newElement)
}

button.addEventListener("click", secondFunction)

function thirdFunction() {
    
}