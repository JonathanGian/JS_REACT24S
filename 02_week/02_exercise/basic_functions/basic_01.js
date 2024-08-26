// Write the function sum such that it returns the sum of a and b.
function sum(a, b) {
    return a + b;
}
const sum = (a,b) => a + b
// sample usage - do not modify
console.log(sum(1, 3, 5));
console.log(sum(2, 5));

or


function sum(a, b) {
    return console.log(a + b)// Put the console.log into the function
}

sum(1, 3, 5)
sum(2, 5)