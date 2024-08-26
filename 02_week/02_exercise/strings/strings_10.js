/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
   */
 function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
} 
    function capitalize(word) {
        lower = word.toLowerCase();
        result = lower.slice(0, 1).toUpperCase() + lower.slice(1);
        return result;
    }

    or

    function capitalize(word) { 
        return word.charAt(0).toUpperCase () + word.slice(1);
 }



    // Sample usage - do not modify
console.log(capitalize('sam')); // "Sam"
console.log(capitalize('ALEX')); // "Alex"
console.log(capitalize('chARLie')); // "Charlie"
