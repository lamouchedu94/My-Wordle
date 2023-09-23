const lib = require('./lib');
// pour l'input
//console.log(lib.getInput());
// pour un mot aléatoire
//console.log(lib.getRandomWord());

function game() {
    const motADeviner : string = lib.getRandomWord();
    console.log(motADeviner);
    let i : number = 1;
    for (let essais = 6; essais > -1; essais -= 1) {
        const userInput = lib.getInput("Donnez un mot :").toUpperCase();
        if (userInput.length < 5 || userInput.length > 5) {
            essais += 1;
            console.log("The guess must be a five letters word.");
            continue;
        }
        if (userInput === motADeviner) {
            console.log(`Congratulation you found the Word in ${i} try !`);
            return true
        }
        //console.log(userInput);
        console.log(`${i} try left.`)
        i += 1
    }
    console.log(`The word was : ${motADeviner}.`);
}
game()