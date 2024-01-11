// Rock Paper Scissor Game Logik

const mainGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;
  let totalRounds = 0;
  let selectedRounds = 0;

  // Auswahl der Rundenanzahl
  const roundsOptions = () => {
    let selectedRounds = parseInt(document.getElementById("rounds").value);
  };

  // Aktualisieren der verbleibenden Züge

  const updateRemainingMoves = () => {
    const remainingMoves = document.querySelector(".remainingMoves");
    remainingMoves.textContent = `Moves remaining ${selectedRounds - moves}`;
  };

  // Funktion zum ermitteln des Gewinners

  const whoWins = (player, computer) => {
    const displayResult = document.querySelector(".result");
    const displayPlayerScore = document.querySelector(".playerScore");
    const displayComputerScore = document.querySelector(".computerScore");

    player = player.toLowerCase();
    computer = computer.toLowerCase();

    if (player === computer) {
      displayResult.textContent = "It's a draw for this round!";
    } else if (player == "rock") {
      if (computer == "paper") {
        displayResult.textContent = "The computer won this round!";
        computerScore++;
        displayComputerScore.textContent = computerScore;
      } else {
        displayResult.textContent = "You won this round!";
        playerScore++;
        displayPlayerScore.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        displayResult.textContent = "The computer won this round!";
        computerScore++;
        displayComputerScore.textContent = computerScore;
      } else {
        displayResult.textContent = "You won this round!";
        playerScore++;
        displayPlayerScore.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        displayResult.textContent = "The computer won this round!";
        computerScore++;
        displayComputerScore.textContent = computerScore;
      } else {
        displayResult.textContent = "You won this round!";
        playerScore++;
        displayPlayerScore.textContent = playerScore;
      }
    }
  };

  // Endes des Spiels / Game Over

  const gameOver = () => {
    const playerButtons = document.querySelector(".userInput");
    const resultDisplay = document.querySelector(".result");

    playerButtons.style.display = "none";

    if (playerScore > computerScore) {
      resultDisplay.textContent = "Congratulations! You won the game!";
    } else if (playerScore < computerScore) {
      resultDisplay.textContent = "The Robot beat you! YOU LOST the game!!";
    } else {
      resultDisplay.textContent = "The game is a D R A W";
    }
  };

  // Funktion zum resetten des Spiels

  const resetTheGame = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
    let totalRounds = 0;
    let selectedRounds = 0;

    // User Buttons wieder einblenden
    const playerButtons = document.querySelector(".userInput");
    playerButtons.style.display = "block";

    // Moves zurücksetzen
    updateRemainingMoves();

    // Call to Action wieder anzeigen!
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = "Let's play a game!!!"

    // Punkte zurücksetzen
    const pla
  }

  const gamePlay = () => {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorButton = document.querySelector(".scissor");
    const userChoices = [rockButton, paperButton, scissorButton];
    const computerChoices = ["rock", "paper", "scissors"];

    // Auswahl der Rundenanzahl - Gibt True oder False
    // Lösung mit Radio Buttons
    // const fiveRounds = document.getElementById("5").checked;
    // const tenRounds = document.getElementById("10").checked;
    // const fifteenRounds = document.getElementById("15").checked;
    // const twentyRounds = document.getElementById("20").checked;

    userChoices.forEach((choice) => {
      choice.addEventListener("click", () => {
        moves++;
        updateRemainingMoves();

        // Choice vom Computer
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[choiceNumber];
      });
    });
  };
};
