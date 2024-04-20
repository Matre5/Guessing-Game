//Array of the responses for when a win occurs and when a loss occurs
var win_response = 
[
    "Wow, you actually won. I'm stunned. Not really, but enjoy your victory",
    "Wow, you cracked the code! Quick, someone alert the Nobel Prize committee.",
    "You win! I'm totally not rolling my eyes right now. Really, I'm not.",
    "Look at you, stumbling into success. Pure luck, I assure you.",
    "Felt like an Ai, didn't you?",
    "Well, color me surprised! You actually got it right. Enjoy your fleeting moment of glory.",
    "Congratulations, you've finally managed to do something right. Impressive."
];

var loss_response =
[
    "Oops, you missed. But don't worry, nobody expected much anyway.",
    "Better luck next time, champ. Or just stick to something less challenging.",
    "Nope, wrong answer. Try not to let it ruin your day... too much.",
    "Well, that didn't go as planned. But hey, failure builds character, right?",
    "Oh darn, you didn't win. What a shocker. Not really, but thanks for playing.",
    "Oh no, you lost! Who could have seen that coming? Oh wait, everyone.",
    "You missed the mark! But hey, at least you're consistent in disappointment.",
    "Better luck next time. Or maybe just give up. Either way works.",
];

//Function that lets us loop through the congragulatory message
function win_message() {
    console.log(win_response[(Math.floor(Math.random() * win_response.length))]);
};

//Function that helps us loop through failed messages
function loss_message() {
    console.log(loss_response[(Math.floor(Math.random() * loss_response.length))]);
};

//The guessing game function
function guessing_game(){

    console.log("This is a number guessing game");
    console.log("Here you try and guess a number and if it matches with the computers guess you win");
    console.log("You only get three chances to best the computer, goodluck... i guess");
    console.log("Let's get started");

    var attempts = 3;
    var Comp_Score = 0;
    var user_Score = 0;

    //The loop of attempts
    for ( var chances = 2; chances >= 0; chances--) {

        var Computer_guess= Math.floor(Math.random() * 100);

        var User_guess = prompt("Guess a number");

        if (Computer_guess == User_guess) {
            win_message();
            console.log("Guesses left", chances);
            // console.log("Computer's guess: ", Computer_guess);
            // console.log("Your guess: ", User_guess);

            user_Score ++;
            console.log("User: ", user_Score, " - Computer: ", Comp_Score);
        }
        else{
            
            if (Computer_guess > User_guess) {
                console.log("Too low");
            } else {
                console.log("Too high");
            }
            loss_message();
            console.log("Guesses left", chances);
            // console.log("Computer's guess: ", Computer_guess);
            // console.log("Your guess: ", User_guess);

            Comp_Score ++;
            console.log("User: ", user_Score, " - Computer: ", Comp_Score);
        };
    };

    console.log("No more attempts left, thanks for playing");
};

guessing_game()
