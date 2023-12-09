const max = prompt("Enter the maximum number");
const random = Math.floor(Math.random() * max)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("User Quit");
        break;
    }
    if(guess==random){
        console.log("You Are Right!congrats! The random number is",random);
        break;
    }
    else if(guess<random){
        guess=prompt("Your guess is small,Try Again");
    }
    else{
        guess=prompt("Your guess is big,Try Again");
    }
}