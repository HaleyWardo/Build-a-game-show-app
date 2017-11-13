/////////////
//CONSTANTS
/////////////

const phraseDiv = document.getElementById('phrase');
const ul = document.getElementsByTagName('ul');
const qwertyDiv = document.getElementById('qwerty');   
const letterButton = qwertyDiv.querySelectorAll('button');
const startButton = document.getElementsByClassName('btn__reset')[0];

const phrases = [
    'A Chip Off The Old Block',
    'Curiosity Killed The Cat',
    'Great Minds Think Alike',
    'Home Sweet Home',
    'Keeping It Real',
];


/////////////
//VARIABLES
/////////////

let missed = 0;   // number of missed guesses 


/////////////
//FUNCTIONS
/////////////


//function to get random phrase and split characters
function getRandomPhraseAsArray(array) {
    const randomPhrase = array[Math.floor(Math.random()*phrases.length)];
    return randomPhrase.toUpperCase().split('');
}

const phraseArray = getRandomPhraseAsArray(phrases);


//function to add list item and display random phrase
function addPhraseToDisplay(array) {   
    for (let i = 0; i < phraseArray.length; i++) {
        const listItem = document.createElement('li');
        ul[0].appendChild(listItem);
        listItem.textContent = phraseArray[i];
    
        if (phraseArray[i] != ' ') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
    }
}
addPhraseToDisplay(phraseArray);



function checkLetter(buttonClicked) {
    const letter = document.getElementsByClassName('letter');
    for (let i = 0; i < letter.length; i++){
        if (buttonClicked.textContent === letter[i].textContent) {
            letter.className = 'show';
            const letterFound = letter[i];
        } else {
            return null;
        }
    }
}


//////////////////
//EVENT HANDLERS
/////////////////

//Listener for when start button is clicked
startButton.addEventListener('click', () => {  
    const overlay = document.getElementById('overlay');
    overlay.style.display = "none";
});

//listener for when user presses a key on keyboard
qwertyDiv.addEventListener('keypress', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        checkLetter(button);
    }
});