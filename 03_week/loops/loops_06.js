// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.
function averageNumbers() {
    let count = 1, i = 0, input, total = 0, average, con = true;

    while (con ) {
        input = +prompt("Input number");
        

        total += input
        con = confirm("Continue?(y/n?)");

        if (!con){
            
            average = total/count;
            alert("The average is: "+ average)
            break;
        }
        count = 1 + count

    }
}
averageNumbers()

function averageNumbers2(){
    let sum = 0;
    let count = 0;
    while (true) {
        let input = +prompt("Enter a number");
        sum += input;
        count++;

        let shouldContinue = prompt("Do you want to continue (y/n)")

        if (shouldContinue = "n") {
            break;
        }
    }
    let average = sum / count;
    console.log(average)

}