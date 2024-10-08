// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:
for (const teamMember of teamMembers){console.log(teamMember)}

// Exercise 2: Remove the first member of the array.
// Write your code here:
teamMembers.shift()

// Exercise 3: Remove the last member of the array.
// Write your code here:
teamMembers.pop()
// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
teamMembers.unshift("Alex")
// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
teamMembers.push("Linda")
// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
let teamMembers2 = teamMembers.slice(2)
// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
teamMembers.indexOf("Mike")
// Exercise 8: Try to find the index of "Jake" (who is not in the array).

// Write your code here:
teamMembers.indexOf("Jake")
// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:
teamMembers.splice(2,1,"Carol","Bruce")
// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:
const teamMembers3 = teamMembers.concat("Bob")

/*  Ways of copying lists:

const num2 = numbers.slice(0)
const num3 = [...numbers];
const num4 = numbers.concat([]) */

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:
teamMembers4 = teamMembers.slice(0)
// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined
let newMembers = ['Tina', 'Dean'];
// Write your code here:
let newteamMembers5 = teamMembers.concat(newMembers)
// Exercise 13: Finding all occurrences of a John
// Write your code here:
newteamMembers5.indexOf("John")
// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:
const upperCaseMembers = newMembers.map((element) => element.toUpperCase())