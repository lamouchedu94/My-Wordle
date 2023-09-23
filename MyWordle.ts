const lib = require('./lib');
// pour l'input
//console.log(lib.getInput());
// pour un mot aléatoire
//console.log(lib.getRandomWord());
let test : string = "test"


function game() {
    const motADeviner : string = lib.getRandomWord();
    console.log(motADeviner);
    let i : number = 1; // i count number of try
    // Game loop
    for (let essais = 6; essais > -1; essais -= 1) {
        let userInput :string = lib.getInput("Give a word :").toUpperCase();
        if (userInput.length < 5 || userInput.length > 5) {
            essais += 1;
            console.log("The guess must be a five letters word.");
            continue;
        }
        if (userInput === motADeviner) {
            console.log(`Congratulation you found the Word in ${i} try !`);
            return true
        }
        
        // let guessNotInWord : string[] = []
        // let guessInWord : string[] = []
        // let guessIsGood : string[] = []
        
        //Navigate in user input
        const userInputArray : string[] = userInput.split("") 
        let iteration = 0 
        userInputArray.forEach((element : any) => {
            // Try each letter
            if (element === motADeviner[iteration]) {
                //Display correct guess.
                console.log(`The letter ${element} is in the word and in the correct spot.`)
                //guessIsGood.push(element);
            } else if (motADeviner.split('').indexOf(element) === -1) {
                //Display letter are in any spot.
                console.log(`The letter ${element} is not in any spot.`);
                //guessNotInWord.push(element);
            } else {
                //Display letter in word but in the wrong spot.
                console.log(`The letter ${element} is in word but in the wrong spot.`);
                //guessInWord.push(element);
            }
            
            iteration += 1
        });
        
        
        guessIsGood.forEach((elem) => {
            console.log(`The letter ${elem} is in the word and in the correct spot.`);
        })
        
        guessNotInWord.forEach((elem) => {
            console.log(`The letter ${elem} is not in any spot.`);
        });
        guessInWord.forEach((elem) => {
            console.log(`The letter ${elem} is in word but in the wrong spot.`);
        });
        
        console.log(`${essais} try left.`);
        i += 1;
    }
    //Display game over message
    console.log(`The word was : ${motADeviner}.`);
}
game()