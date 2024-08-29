// Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.
function userNumbers(){
    let smallest,biggest
    count = prompt("How many numbers do you wish to enter?")

    while(count > 0){
        console.log(count,"count loop start")
        number = prompt("Enter a number?")
        console.log(number,"number before if statement")
        if (number < Infinity){
            smallest=number
            console.log(smallest,"Smallest after first if")
        }
        else {if (number>-Infinity){
            biggest = number
        }
    }
        count -= 1

    }
    console.log("biggest",biggest,"smallest",smallest)
}

userNumbers()