/*wap to generate a random number and store it in a variable.
The program then takes an input from the user to tell them whether the guess was correct,greater or lesser than the orignal number.
100 - (no of guesses) is the score of the user. 
The program is expected to terminate once the number is glossed.
Number should lie between 1 - 100.
*/

let a = Math.random()*100;
a = Number.parseInt(a);  //generated from comp

let input;
let score = 100;  //initialisation

while (input!=a)            //condition
{
    score = score - 1;  //no of guesses (decrement)

    input = prompt("Enter the Number");
        // 'a' is the actual number 
        if(input == a )
        {
            console.log('Congratulations! You guessed the correct number')
            console.log('you guess the actual number in',{score}, 'scores')
        }

        else if(input > a && input <100 )
        {
            console.log("your number is greater than actual number")
        }

        else if(input <a && input  >0)
        {
            console.log("your number is less than actual number")

        }
        else 
        {
            console.log("Your number is between 1 to 100")
        }

} 