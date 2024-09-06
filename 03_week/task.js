/* ## Requirements
1) Create a function called `checkBalance` to show the current balance to the user.

2) Write a function called `deposit` that takes an amount of money to add to the balance. If the amount is positive, add it to the balance.

3) Write a function called `withdraw` that takes an amount of money to subtract from the balance. It should only allow the withdrawal if the amount is positive and does not exceed the current balance.

4) Create a `main` function to repeatedly ask the user what they want to do (check balance, deposit, withdraw, or exit) until they choose to exit.

5) Use `prompt` to get user input and `alert` to show messages. */
"use strict"
let balance = 1000

function checkBalance() {
    alert("You're balance is: "+ balance)
}


function deposit() {
    input= +prompt("How much would you like to deposit?")
    if (input >= 0){
        balance += input
        alert("You're new balance is: "+ balance)
    }
    else{
        alert("The number you entered is not possible.")
        
    }
}

function withdraw() {
    input = +prompt("How much would you like to withdraw?")
    if (input <= balance){
        balance -= input
        alert("You're new balance is: "+ balance)
    } else{
        alert("Insufficent funds")
    }
}

function main() {
    
    input = prompt("What would you like to do?(check balance, deposit, withdraw, exit)")
    while (input =! "exit"){
        
    }


}
