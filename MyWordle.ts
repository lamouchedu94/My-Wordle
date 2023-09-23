
// pour l'input
//console.log(lib.getInput());
// pour un mot aléatoire
//console.log(lib.getRandomWord());
function game() {
    const lib = require('./lib'); 
    const motADeviner : string = lib.getRandomWord();
    //define color
    const red = `\x1B[31m`
    const green = `\x1B[32m`
    const yellow = `\x1B[33m`
    const resetColor = `\x1B[0m`
     
    console.log(`${motADeviner}`);
    
    let i : number = 1; // i count number of try
    // Game loop
    for (let essais = 5; essais > -1; essais -= 1) {
        //User input are automatically convert To UpperCase
        let userInput :string = lib.getInput("Try a word :").toUpperCase();
        if (userInput.length < 5 || userInput.length > 5) {
            essais += 1;
            console.log("The guess must be a five letters word.");
            continue;
        }
        if (userInput === motADeviner) {
            console.log(`${green} ${userInput} ${resetColor}`)
            console.log(`Congratulation you found the Word in ${i} try !`);
            return true
        }
        
        // let guessNotInWord : string[] = []
        // let guessInWord : string[] = []
        let guessCorrection : string[] = []
        
        //Navigate in user input
        const userInputArray : string[] = userInput.split("") 
        let iteration = 0 
        userInputArray.forEach((element : any) => {
            // Try each letter
            if (element === motADeviner[iteration]) {
                //add guess to array with his color.
                guessCorrection.push(`${green} ${element} ${resetColor}`);
            } else if (motADeviner.split('').indexOf(element) === -1) {
                //add guess to array with his color.
                guessCorrection.push(`${red} ${element} ${resetColor}`);
            } else {
                //add guess to array with his color.
                guessCorrection.push(`${yellow} ${element} ${resetColor}`);
            }
            
            iteration += 1
        });
        console.log(guessCorrection.join(''))
        console.log(`${essais} try left.`);
        i += 1;
    }
    //Display game over message
    console.log(`Game Over. The word was : ${motADeviner}.`);
}
game()