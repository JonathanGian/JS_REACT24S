// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

function kmph(){
    let kilometers, hours, averageSpeed;
    while (kilometers != 0)
    {
         kilometers = +prompt("How many kilometers?(enter 0 to exit)");
         if (kilometers ==0){
            console.log("Distance = 0..exiting")
            break;
         }
         hours = +prompt("How many hours?");
         
         averageSpeed = kilometers/hours;
         
    alert("Average Speed: " +averageSpeed);
    
    }
}
kmph()

                or

function avgSpeed() {
    let distance, time;

    while (distance != 0) {
        distance = +prompt("Enter distance in kilometers(use numbers)");

        if (distance == 0){
            console.log("Distance 0 - game over");
            break;
        }
        time = +prompt("Enter time in house(Use numbers)")

        let average = distance / time;
        alert("average is: "+ average)
    }
}
avgSpeed()