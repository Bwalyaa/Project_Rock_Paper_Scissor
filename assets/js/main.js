// Rock Paper Scissor Game Logik

// Globaler Scope
let selectedRounds = 0;

// Auswahl der Rundenanzahl
const roundsOptions = () => {
  selectedRounds = parseInt(document.getElementById("rounds").value);
};

const mainGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

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
    } else if (player == "👊") {
      if (computer == "🤚") {
        displayResult.textContent = "The computer won this round!";
        computerScore++;
        displayComputerScore.textContent = computerScore;
      } else {
        displayResult.textContent = "You won this round!";
        playerScore++;
        displayPlayerScore.textContent = playerScore;
      }
    } else if (player == "🤚") {
      if (computer == "✌️") {
        displayResult.textContent = "The computer won this round!";
        computerScore++;
        displayComputerScore.textContent = computerScore;
      } else {
        displayResult.textContent = "You won this round!";
        playerScore++;
        displayPlayerScore.textContent = playerScore;
      }
    } else if (player == "✌️") {
      if (computer == "👊") {
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

  // Ende des Spiels

  const gameOver = () => {
    const playerButtons = document.querySelector(".buttons");
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
    playerScore = 0;
    computerScore = 0;
    moves = 0;

    // User Buttons wieder einblenden
    const playerButtons = document.querySelector(".buttons");
    playerButtons.style.display = "block";

    // Moves zurücksetzen
    updateRemainingMoves();

    // Call to Action wieder anzeigen!
    const resultDisplay = document.querySelector(".result");
    resultDisplay.textContent = "Let's play a game!!!";

    // Punkte zurücksetzen
    const playerScoreDisplay = document.querySelector(".playerScore");
    const computerScoreDisplay = document.querySelector(".computerScore");
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
  };

  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", resetTheGame);

  const gamePlay = () => {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorButton = document.querySelector(".scissor");
    const userChoices = [rockButton, paperButton, scissorButton];
    const computerChoices = ["👊", "🤚", "✌️"];

    userChoices.forEach((choice) => {
      choice.addEventListener("click", () => {
        moves++;
        updateRemainingMoves();

        // Choice vom Computer
        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerChoices[choiceNumber];

        // Gewinner ermitteln
        whoWins(choice.innerText, computerChoice);

        // Überprüfen ob das Spiel vorbei ist
        if (moves >= selectedRounds) {
          gameOver();
        }

        // Spieler und Computer Choice anzeigen

        const displayPlayerChoice =
          document.querySelector(".playerChoiceEmoji");
        const displayComputerChoice = document.querySelector(
          ".computerChoiceEmoji"
        );

        displayPlayerChoice.textContent = choice.innerText;
        displayComputerChoice.textContent = computerChoice;
      });
    });
  };

  // Spiel laden
  roundsOptions();
  updateRemainingMoves();
  gamePlay();
};

// Spiel starten
mainGame();
