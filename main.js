const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const result = document.querySelector(".result");

function computerChoice() {
	let random = Math.random();

	if (random < 0.34) {
		return "rock";
	} else if (random >= 0.34 && random < 0.67) {
		return "scissors";
	} else {
		return "paper";
	}
}

function gameResult(player, computer) {
	if (player == computer) {
		return "DRAW";
	} else if (player == "rock") {
		if (computer == "scissors") {
			return "WIN";
		} else {
			return "LOSE"
		}
	} else if (player == "scissors") {
		if (computer == "paper") {
			return "WIN"
		} else {
			return "LOSE"
		}
	} else if (player == "paper") {
		if (computer == "rock") {
			return "WIN";
		} else {
			return "LOSE";
		}
	}
}

function game(choice) {
	player.className = "player " + choice;

	const compChoice = computerChoice();
	computer.className = "computer " + compChoice;

	result.innerHTML = gameResult(choice, compChoice);
}

rock.addEventListener("click", function() {
	game("rock");
}); 

scissors.addEventListener("click", function() {
	game("scissors");
}); 

paper.addEventListener("click", function() {
	game("paper");
});



