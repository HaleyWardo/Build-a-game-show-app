/////////////
//CONSTANTS
/////////////

const overlay = document.getElementById('overlay');
const title = document.querySelector('.title');
const startButton = document.getElementsByClassName('btn__reset')[0];
const phraseDiv = document.getElementById('phrase');
const phraseUl = document.getElementsByTagName('ul');
const letter = document.getElementsByClassName('letter');
const show = document.getElementsByClassName('show');
const qwertyDiv = document.getElementById('qwerty');   
const letterButton = qwertyDiv.querySelectorAll('button');
const scoreboard = document.getElementById('scoreboard');
const scoreboardLi = scoreboard.querySelectorAll('.tries');



const phrases = [
    'A Chip Off The Old Block',
    'Curiosity Killed The Cat',
    'Great Minds Think Alike',
    'Home Sweet Home',
    'Keeping It Real',
];

const resetPhrases = [
    'The Breakfast Club',
    'Jurassic Park',
    'Stranger Things',
    'Rick and Morty',
    'Alien covenant',
]

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
        phraseUl[0].appendChild(listItem);
        listItem.textContent = phraseArray[i];
    
        if (phraseArray[i] != ' ') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
    }
}
addPhraseToDisplay(phraseArray);


//function to compare letter clicked vs random phrase
function checkLetter(buttonClicked) {
    const letterClicked = buttonClicked.textContent.toUpperCase();
    let letterFound = false;

    for (let i = 0; i < letter.length; i++){
        if (letterClicked === letter[i].textContent) {
            letter[i].classList.add('show');
            letterFound = true;
        } 
    }
    
    return letterFound ? letterClicked : null;
}

//function to check if the player has won or not
function checkWin() {
        if (letter.length === show.length) {
            overlay.classList.add('win');
            overlay.style.display ='';
            title.textContent = "You win!"
            startButton.textContent = "Reset"
        }
    
        if (missed >= 5) {
            overlay.classList.add('lose');
            overlay.style.display ='';
            title.textContent = "You lose!"
            startButton.textContent = "Reset"
        }
    }
    


//////////////////
//EVENT HANDLERS
/////////////////


//Listener for when start button is clicked
startButton.addEventListener('click', () => {  
    overlay.style.display = "none";
});


//listener for when user presses a key on keyboard
window.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.className = 'chosen';
        const letterFound = checkLetter(e.target);

        if (letterFound === null) {
            missed += 1;
        }

        if (missed >= 1 && missed <= 5){
            const heart = scoreboardLi[scoreboardLi.length-missed];
            heart.getElementsByTagName('img')[0].src = 'images/lostHeart.png';
        }
    }
    checkWin();
});


startButton.addEventListener('click', (e) => {
    if (e.target.textContent === 'Reset'){
    }
});


