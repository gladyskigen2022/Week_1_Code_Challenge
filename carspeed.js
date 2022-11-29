// Car speed detector system

//const readline = require('readline');
//const input = readline.createInterface
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
//Speed is input an integer
input.question("Speed of the car: ", function (speed){ 
    let speed_of_car = parseInt(speed, 10);
    //Conditional statements: if  Speed < 70; print OK!
   // Speed < 70, reduce by 1 point for every 5 km and give the total number of demerit point
   // Suspend licence for >= 12 point
    if (isNaN(speed)){
        process.stdout.write("Speed must be a numerical value\n");
        process.stdout.write("On prompt input as numerical value e.g 60\n");
        process.exit(1)
    }
    else{
       if (speed_of_car < 70){
        process.stdout.write("Ok!\n");
       } 
       else{
        const demerit_points = ((speed_of_car - 70) / 5);
        Math.ceil(demerit_points);
        process.stdout.write(`Points: ${demerit_points}\n`);
            if (demerit_points >= 12) {
                process.stdout.write("License suspended.\n");                
            } else {
                process.exit(0);                
            }
       }
    }
    input.close();
});

