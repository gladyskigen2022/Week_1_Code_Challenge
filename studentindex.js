// Grading system

//const readline = require('readline');
//const input = readline.createInterface
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
//prompts the user to input student marks. 
input.question("Enter students marks: ", function (mark){ 
   // Input - between 0 and 100.
    let marks = parseInt(mark, 10);
    if (isNaN(marks)|| marks>100){
        process.stdout.write("Please Enter a valid number\n");
        process.exit(1)
        // Calculates and outputs the correct grade .
    }else{
        if (marks > 79) {
            process.stdout.write("A\n");    
        } else if (marks > 60) {
            process.stdout.write("B\n");    
        } else if(marks > 49) {
            process.stdout.write("C\n");
        } else if(marks > 40) {
            process.stdout.write("D\n");
        }else{
            process.stdout.write("E\n");
        }
    } 
    input.close();
});
