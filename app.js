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
function getRandomHidingSpot() {   //use this in handleGuess?
    const hidingPlaces = [
        'cup-one',
        'cup-two',
        'cup-three',
    ]; 
    const index = Math.floor(Math.random() * hidingPlaces.length);
    return hidingPlaces[index];
}

function handleGuess(userGuess, correctSpot) {       //userGuess, correctSpot //define correctSpot?
    
    resetStyles();
    
    total++;

    getRandomHidingSpot();

    // //decide which cup, at random 
    // const numberBetweenZeroAndThree = Math.floor(Math.random() * 3);
    
    // if (numberBetweenZeroAndThree === 0) {
    //     wins++;
    // }
     
    const correctCupImageEl = document.getElementById(`cup-${numberBetweenZeroAndThree}`);
    correctCupImageEl.src = 'assets/cup-with-ball.png';

    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;

}


  // set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
firstButton.addEventListener('click', () => {
    handleGuess(0); 
});

secondButton.addEventListener('click', () => {
    handleGuess(1);
});

thirdButton.addEventListener('click', () => {
    handleGuess(2);
});




//const hidingSpotEl = document.getElementById(correctSpot + '-container');
    //hidingSpotEl.src = './assets/cup-with-ball.png';

// then show image with ball
    //hidingSpotEl.classList.add(imgCupWithBall.src = './assets/cup-with-ball.png');     ///more complex code needed here to make this appear

   // if (randomCupNumber === 0) {
        //wins++;

        //imgCupWithBall.src = './assets/cup-with-ball.png';

   // } else if (randomCupNumber === 1) {
      // imgCupWithBall.src = './assets/cup-with-ball.png';

   // } else {
       // imgCupWithBall.src = './assets/cup-with-ball.png';
   // }

   //'cup-one', getRandomHidingSpot()
//'cup-two', getRandomHidingSpot()
//'cup-three', getRandomHidingSpot()



//if (index === userGuess) {     //replace correctSpot with hidingSpotEl? No
 // wins++;
//} 
//function displayWinsLossesAndTotal() {
// - Update DOM
//   - Change numbers in winEl, lossEl, and totalEl
 // winsEl.textContent = wins;
 // lossesEl.textContent = total - wins;
 // totalEl.textContent = total;
//} 
//displayWinsLossesAndTotal();
//}