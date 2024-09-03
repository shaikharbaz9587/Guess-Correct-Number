let arr = [];
let a;
let att = 0;
let maxatt = 5;

// Function to generate a random number between 0 and 99
function r() {
    a = Math.floor(Math.random() * 100);
    console.log("Generated number:", a);
}

r(); // Generate the random number when the page loads

// Handling button click event directly
document.getElementById("submitGuessBtn").onclick = function() {

    // Get user input
    let x = Number(document.getElementById("guessInput").value); 


     // Check if user has run out of attempts and hasn't guessed correctly
     if (att === maxatt && x !== a) {
        document.getElementById("result").innerHTML += `<br>Sorry, you've used all ${maxatt} attempts. The correct number was ${a}.`;
    }

    // Validate input
    if (isNaN(x) || x < 0 || x > 99) {
        document.getElementById("result").innerHTML = "Please enter a valid number between 0 and 99.";
        return;
    }

    // Check if attempts are exhausted
    if (att >= maxatt) {
        document.getElementById("result").innerHTML = `Sorry, you've used all ${maxatt} attempts. The correct number was ${a}.`;
        return;
    }

    // Add the guess to the array
    arr.push(x);
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + arr.join(", ");

    att++; // Increment attempts

    // Compare the guess with the generated number
    if (x > a) {
        if (x - a > 20) {
            document.getElementById("result").innerHTML = "Your guess is much higher than the correct number.";
        } else {
            document.getElementById("result").innerHTML = "Your guess is a little higher than the correct number.";
        }
    } else if (x < a) {
        if (a - x > 20) {
            document.getElementById("result").innerHTML = "Your guess is much lower than the correct number.";
        } else {
            document.getElementById("result").innerHTML = "Your guess is a little lower than the correct number.";
        }
    } else {
        document.getElementById("result").innerHTML = `Congratulations! You guessed the correct number: ${a}.`;
        return; // Stop further input on a correct guess
    }

   
};