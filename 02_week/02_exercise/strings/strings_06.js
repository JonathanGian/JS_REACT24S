/**
Refine the skipFirstCharacter function to return a string containing all characters from the text parameter, excluding the first character.

 */
function skipFirstCharacter(text) {
    return text.slice(1,5)
}
            or

function skipFirstCharacter(text) {
    // Return the string starting from the second character (index 1)
    return text.substring(1); // or you can use text.slice(1);
}

            or
    
function skipFirstCharacter(text) {
    return text.slice(1)
}
// Sample usage - do not modify
console.log(skipFirstCharacter('Xcode')); // "code"
console.log(skipFirstCharacter('Hello')); // "ello"
