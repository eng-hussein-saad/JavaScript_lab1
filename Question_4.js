function Game() {
  var n = Math.floor(Math.random() * 11);
  console.log(n); //just for testing but when playing the game for real this line should be commented
  var retrials = 0;
  do {
    var userInput = prompt("Please enter your guess ");
    if (userInput === null) {
      break;
    }
    if (parseInt(userInput) === n) {
      alert("Good Work");
      break;
    } else {
      if (retrials === 2) {
        alert("GameOver");
        break;
      } else {
        var userInput2 = confirm("Wrong guess, want to try again?");
        retrials += 1;
      }
    }
  } while (retrials < 3 && userInput2 !== false);
}
Game();
