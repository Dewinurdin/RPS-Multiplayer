$(document).ready(function() {


console.log("hello");

var playerOneScore = 0;
var playerTwoScore =0;

//function on click on rock, paper or scissor image
function main() {
$("#r").on("click", function() {
	game("r");
	console.log("rock");
		});
$("#p").on("click", function() {
	console.log("paper");
	game("p");
		});
$("#s").on("click", function() {
	console.log("scissor")
	game("s");
		});
};

main();

//get player two choices
function playerTwoChoice() {
	var choices = ["r", "p", "s"];
	};

//player one
//comparison to determine winning or losing
function game(userChoice) {
	var playerTwo = playerTwoChoice();
	switch (userChoice + playerTwo) {
		//switch statement to switch arguments
		//user will win as follow
		case "rs":
		case "pr":
		case "sr":
			win(userChoice);
			
		console.log("user wins");
		break;
// 		//player 2 win as follow
		case "rp":
		case "ps":
		case "sr":
		lose();
			// computerScore++;
			
		console.log("user loses");
		break;
		TIE
		case "rr":
		case "pp":
		case "ss":
		console.log("tie");
		draw();
		break;
	}
};
// ???????????????????????
function win(firtPlayer, secondPlayer) {
		playerOneScore++;
		$("#player-onescore").text(playerOneScore);
		$("#player-twoscore").text(playerTwoScore);
		$(".result").text(convertToWord(firstPlayer)) "beats" + convertToWord(playerTwo). "You Win!";
}

function lose() {
		playerTwoScore++;
		$("#player-onescore").text(playerOneScore);
		$("#player-twoscore").text(playerTwoScore);
		$(".result").text(convertToWord(secondPlayer)) "beats" + convertToWord(firstPlayer). "You Win!";

}

function draw() {
	console.log(DRAW);
		$(".result").text(convertToWord(firstPlayer)) "equals" + convertToWord(playerTwo). "It's a Draw!";

}
//convert r,p,s to word

function convertToWord(letter) {
	if(letter ==="r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissor";
}










}); 
//doc.ready



