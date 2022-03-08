// import functions and grab DOM elements
const firstButton = document.getElementById('first-cup-button');
const secondButton = document.getElementById('second-cup-button');
const thirdButton = document.getElementById('third-cup-button');
const imgCupNoBall = document.getElementById('cup-no-ball-img');
const imgCupWithBall = document.getElementById('cup-with-ball-img');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state

let wins = 0;
let total = 0;

function resetImages() {
  // - (reset image of all cups)
  // make each image be cup-no-ball
    imgCupNoBall.src = './assets/cup-no-ball.png';
}

function displayWinsLossesAndTotal() {
  // - Update DOM
  //   - Change numbers in winEl, lossEl, and totalEl
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

function handleGuess() {
    resetImages();  //not sure how this will work, better to just input the image instead of a function?
    total++;

  //decide which cup, at random 
    const randomCupNumber = Math.floor(Math.random() * 3);

    if (randomCupNumber === 0) {
        wins++;

        imgCupWithBall.src = './assets/cup-with-ball.png';

    } else if (randomCupNumber === 1) {
        imgCupWithBall.src = './assets/cup-with-ball.png';

    } else {
        imgCupWithBall.src = './assets/cup-with-ball.png';
    }

    displayWinsLossesAndTotal();
}

firstButton.addEventListener('click', () => {
    handleGuess();
});


secondButton.addEventListener('click', () => {
    handleGuess();
});

thirdButton.addEventListener('click', () => {
    handleGuess();
});




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
