const qwertyDiv = document.getElementById('qwerty');    
const phraseDiv = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset')[0];

let missed = 0;   // number of missed guesses 

const phrases = [
    'A Chip Off The Old Block',
    'Curiosity Killed The Cat',
    'Great Minds Think Alike',
    'Home Sweet Home',
    'Keeping It Real',
];

/**
 * Function that takes an array and returns a randomly selected phrase. 
 * Then it splits the phrase into characters and uppercases all letters.
 * @param {*} array 
 */
function getRandomPhraseAsArray(array) {
    const randomPhrase = array[Math.floor(Math.random()*phrases.length)];
    return randomPhrase.toUpperCase().split('');
}

startButton.addEventListener('click', () => {    //event listener for when button is clicked
    startButton.style.display = 'none';
});




