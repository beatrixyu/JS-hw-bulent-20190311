//1)choose a random number between 1 to 10
/* 2) control the answer is inside of the limits? Math.floor(Math.random() * 10) + 1;
3) put a button on screen to start the game
4) add flexible limits. put one more button to screen. when sth one click, ask beginning and ending numbers.
after this ur app should work between this number.
5) add a variable for guess count. Ask user how many times would like to guess. Afterwards set the answer to this variable. Normally user has 1 chance to guess but any more you will decide to win or lose after the count.
6) put a smiley to web page and if answer is wrong, it will be sad face, if win it will be like happy face. */

//Slet answer = prompt("Please guess a number between 1 to 10");

//1)choose a random number between 1 to 10
function gameOne() {
  let randomNum = Math.floor(Math.random() * 10) + 1; //the output will be 1 to 10
  let answer = prompt("Please guess a number between 1 to 10");
  if (answer == randomNum) {
    alert("Correct! You won!");
    return true;
  } else {
    alert("Sorry, please try again, the correct number is " + randomNum);
    return false;
  }
  // } else if (answer === " " || isNaN) {
  //   alert("Please don't leave, play the game!");
  //   prompt("Please guess a number between 1 to 10");
  // } else if (answer === null) {
  //   alert("Please don't leave, play the game!");
  //   prompt("Please guess a number between 1 to 10");
}
// gameOne();

//game two
function gameTwo() {
  let highest = prompt("Please select a highest number");
  let lowest = prompt("Please select a lowest number");
  let randomNum1 = highest - Math.floor(Math.random() * (highest - lowest));
  //let randomNum1 = Math.floor(Math.random() * highest);
  let answer1 = prompt(
    "The number you choose is between  " +
      highest +
      "  and  " +
      lowest +
      "  , please guess a number between!"
  );
  if (answer1 == randomNum1) {
    alert("Correct! You won!");
    return true;
  } else {
    alert("Sorry, please try again, the correct number is " + randomNum1);
    return false;
  }
}
// gameTwo();

//how many times can type

function gameThree() {
  let howManyTimes = prompt(
    "You have several chances to guess a number, tell me how many times you want to bet?"
  );
  let resultGameThree;
  for (i = 0; i < howManyTimes; i++) {
    resultGameThree = gameOne();
    if (resultGameThree) {
      break;
    }
  }

  // if (answer === randomNum) {
  //   alert("Correct! You won!");
  // } else {
  //   for (promptTimes = 0; promptTimes <= howManyTimes - 1; promptTimes++) {
  //     result = gameOne();
  //   }
  // }
}
// gameThree(gameOne());

//emoji
function gameFour() {
  // var emojis = [
  //   0x1f600,
  //   0x1f604,
  //   0x1f34a,
  //   0x1f344,
  //   0x1f37f,
  //   0x1f363,
  //   0x1f370,
  //   0x1f355,
  //   0x1f354,
  //   0x1f35f,
  //   0x1f6c0,
  //   0x1f48e,
  //   0x1f5fa,
  //   0x23f0,
  //   0x1f579,
  //   0x1f4da,
  //   0x1f431,
  //   0x1f42a,
  //   0x1f439,
  //   0x1f424
  // ];
  let answer3 = prompt("Please guess a number between 1 to 5");
  let randomNum3 = Math.floor(Math.random() * 5) + 1;

  if (answer3 == randomNum3) {
    alert("\ud83d\udd25" + "You won!" + "\ud83d\ude3c");
    return true;
  } else {
    alert(
      "	\ud83d\udca3" +
        " Sorry, please try again, the correct number is " +
        randomNum3 +
        "\ud83d\udca9"
    );
    return false;
  }
}
// gameFour();
