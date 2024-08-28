// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.
/* function generateEvenNumberPattern() {
    let result = "";
    let forward = 2;
    let backward = 98;

    while (forward < 100 && backward > 0) {
        result += forward + ", " + backward;
        forward += 2;
        backward -= 2;
        if (forward < 100) {
            result += ", ";
        }
    }

    console.log(result);
} 

// Call the function
generateEvenNumberPattern(); */
function generatePattern() {
    let answer = "";
    let end = 98;

    for (let i = 2; i < 100; i += 2 ) {
        answer += `${i} ${end} `;
        end -= 2;
    }
    console.log(answer);
}
generatePattern()

        or

function evenPositiveNumbers() {
    let result = ""; // Initialize an empty string to store the result

    for (let i = 2; i < 50; i += 2) {
        result += i + ", " + (100 - i); // Add the current pair of numbers to the string

        if (i + 2 < 50) { // Check if it's not the last iteration
            result += ", "; // Add a comma and space only if not the last pair
        }
    }

    console.log(result); // Output the final string
}

evenPositiveNumbers();

            or

function evenPositiveNumbers() {
    let result = ""; // Initialize an empty string to store the result

    for (let i = 2; i < 50; i += 2) {
        result += i + ", " + (100 - i); // Add the current pair of numbers to the string

        if (i + 2 < 50) { // Check if it's not the last iteration
            result += ", "; // Add a comma and space only if not the last pair
        }
    }

    console.log(result); // Output the final string
}

evenPositiveNumbers();