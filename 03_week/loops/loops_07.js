/* Make a program that asks ten numbers. Program calculates and prints out sum and average, also prints out the smallest and biggest number. */
function askTen() {
    let total = 0;
    let count = 0;
    let smallest, biggest;

    while (count < 10) {
        let input = +prompt("Enter 10 numbers."); // Convert the prompt input to a number
        
        total += input;
        count += 1;

        // Initialize smallest and biggest on the first input
        if (count === 1) {
            smallest = input;
            biggest = input;
        } else {
            // Update the smallest number if the current input is smaller
            if (input < smallest) {
                smallest = input;
            }
            // Update the biggest number if the current input is larger
            if (input > biggest) {
                biggest = input;
            }
        }
    }

    let average = total / count;
    alert(`Sum: ${total} Average: ${average} Smallest: ${smallest} Biggest: ${biggest}`);
}

askTen();

function myFunction() {
    let sum = 0;
    let smallest = Infinity; 
    let biggest = -Infinity;
    count = 10

    for (let counter = 0; counter < count; counter++) {
        let input = +prompt("Number?")
        // Command D to select multiple of the same text
        sum += input;

        if (input< smallest){
            smallest = input
        }
        if (input > biggest){
            biggest = input;
        }
        
    }
    const average = sum / counts;
    console.log (`Sum of the numvers: ${sum}. Average of the numvers: ${average}. Smallest number: ${smallest}. Biggest number: ${biggest}`)
}