const battleship = () => {

 //--- create players using objects--- 
  let player1 = {
    name: '',
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ], 
    guesses: []
  };

    let player2 = {
      name: '',
      shipCount: 4,
      gameBoard: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ], 
      guesses: []
  };

  
  //--- Created functions to prompt for player names and confirm the input---
    function pOneInput(){
    player1.name = prompt('Enter name for player 1');
    while(player1.name == '') {
      alert('I need to know what to call you!');
      player1.name = prompt('Enter name for player 1');
    }if (player1.name != 0){
      alert(`Thanks! Welcome to Battleship ${player1.name}!!!`);
      console.log(`${player1.name} is Player 1`);
      
      } 
  }
    

         
  function pTwoInput(){
    player2.name = prompt('Enter name for player 2');
    while(player2.name == '') {
      alert('I need to know what to call you!');
      player2.name = prompt('Enter name for player 2');
    }if (player2.name != 0){
      alert(`Thanks! Welcome to Battleship ${player2.name}!!!`);
      console.log(`${player2.name} is Player 2`);
      
      } 
  }

  pOneInput();
  pTwoInput();
    
   
  
  // --- Created a function to generate a random number between 1 and 3 ---
  function rand0to3(){
    return Math.floor(Math.random() * 4);
  }

  // --- Created function to randomly place battleships---
  function battleStations(ships){
    for (i = 0; i < 4; i++){
      let xCoordinate = rand0to3();
      let yCoordinate = rand0to3();
      if ( ships[xCoordinate][yCoordinate] === 0){
        ships[xCoordinate][yCoordinate] = 1;
      } else {
        i--;
      }
    }
  }

  // --- THE BATTLECRY and setting up the randomised game boards---
  alert('TO YOUR BATTLESTATIONS!!!');

  battleStations(player1.gameBoard);
  console.log(player1.gameBoard);

  battleStations(player2.gameBoard);
  console.log(player2.gameBoard);
  

  // --- Created function to start the game. Prompting for user input and checking for empty fields---
  function startGame(attacker, target){
    let guessX;
    let guessY;

    if(attacker.guesses[0] == undefined){
      guessX = prompt(`${attacker.name}, pick an X coordinate from 0 - 3.`);
      if (guessX == '' || guessX > 3 ){
        alert('Invalid entry. Try again');
        guessX = prompt(`${attacker.name}, pick an X coordinate from 0 - 3.`);
      }
      guessY = prompt(`${attacker.name}, now pick a Y coordinate from 0 - 3.`)
      if(guessY == '' || guessY > 3){
        alert('Invalid entry. Try again');
        guessX = prompt(`${attacker.name}, pick an X coordinate from 0 - 3.`);
      } else {

          attacker.guesses.push(`X:${guessX}, Y: ${guessY}`);
          console.log(`${attacker.name} guessed: ${attacker.guesses}`);
      }
    } else{
      guessX = prompt(`${attacker.name}, You're up! ${target.name} has ${target.shipCount} ships remaining. Pick an X coordinate from 0 = 3.`);
      if (guessX == '' || guessX > 3 ){
        alert('Invalid entry. Try again');
        guessX = prompt(`${attacker.name}, pick an X coordinate from 0 - 3.`);
      }
      guessY = prompt(`${attacker.name}, now pick a Y coordinate from 0-3.`);
      if(guessY == '' || guessY > 3){
        alert('Invalid entry. Try again');
        guessX = prompt(`${attacker.name}, pick an X coordinate from 0 - 3.`);
      } else{
          attacker.guesses.push(`X:${guessX}, Y: ${guessY}`);
          console.log(`${attacker.name} guessed: ${attacker.guesses}`);
      }
    }

    // --- confirming hits and misses ---
    if (target.gameBoard[guessX][guessY] === 1 ){
      alert(`BOOM!!! You've hit ${target.name}'s ship!!`);
      target.gameBoard[guessX][guessY] == 0;
      target.shipCount --;
    } else {
      alert(`Miss!`);
    }
 
    // --- determining the winner ---
    if(target.shipCount === 0){
      winner = attacker.name;
      console.log(`${winner} wins!`);
      alert(`${winner} Wins!! With a final score of ${attacker.shipCount} to ${target.shipCount}`);
      return winner;
      
    } else if ( attacker == player1){
      startGame(player2, player1);
    } else {
      startGame(player1, player2);
    }
  }

  // --- Let's Play!!! ---
 startGame(player1, player2);


}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')


htmlTarget.innerHTML = gameResult
