// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

function averageNumbers() {
    let count, i = 0, input, total = 0, average;

    while (input =! 0) {
        input = +prompt("Input number(0 to exit)");
        
       

        if (input == 0){
            average = total/i
            alert("The average of your numbers is "+ average)
            break;


        }
        total += input

        i +=1;
        
    }
}
averageNumbers()

/*          NOT WORKING 

function calcAverage() {
    let sum = 0
    let count = 0

    do {
        let input = +prompt("Enter number (zero to exit)")
        if (input !== 0){
            sum += input;
            count += 1;
        }


    } while (input !== 0);
    let average = sum/count;
    console.log(average);
    
}

calcAverage() */