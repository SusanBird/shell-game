// import functions and grab DOM elements
const firstButton = document.getElementById('first-cup-button');
const secondButton = document.getElementById('second-cup-button');
const thirdButton = document.getElementById('third-cup-button');

const firstCupImage = document.getElementById('cup-0');
const secondCupImage = document.getElementById('cup-1');
const thirdCupImage = document.getElementById('cup-2');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state

let wins = 0;
let total = 0;

//console.log(wins, totals);

// create function 

function resetStyles() {
    firstCupImage.src = 'assets/cup-no-ball.png';
    secondCupImage.src = 'assets/cup-no-ball.png';
    thirdCupImage.src = 'assets/cup-no-ball.png';
}

// decide which cup, at random 
function getRandomHidingSpot() {
    const hidingPlaces = [
        '0',
        '1',
        '2',
    ]; 
    const index = Math.floor(Math.random() * hidingPlaces.length);
    return hidingPlaces[index];
}

function handleGuess(userGuess, correctSpot) {       //userGuess, correctSpot //define correctSpot?

    resetStyles();
    
    total++;

    const correctCupImageEl = document.getElementById(`cup-${correctSpot}`);
    correctCupImageEl.src = 'assets/cup-with-ball.png';

    if (userGuess === correctSpot) {
        wins++;
    }

    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
}


  // set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
firstButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot(); 
  
    handleGuess('0', correctSpot); 
});

secondButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot(); 
  
    handleGuess('1', correctSpot); 
});

thirdButton.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot(); 
  
    handleGuess('2', correctSpot); 
});




//const hidingSpotEl = document.getElementById(correctSpot + '-container');
    //hidingSpotEl.src = './assets/cup-with-ball.png';

// then show image with ball
    //hidingSpotEl.classList.add(imgCupWithBall.src = './assets/cup-with-ball.png');     ///more complex code needed here to make this appear




