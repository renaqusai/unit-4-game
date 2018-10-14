
/*There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.
When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.
The game restarts whenever the player wins or loses.
When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.
*/

// target number randon from 19-120
var targetNum = Math.floor(Math.random() * 120 - 19) + 19;
var wins = 0;
var losses = 0;
var userScore = 0;
//random crystal values betweem 1-12
var redValue = Math.floor(Math.random() * 12 + 1);
var blueValue = Math.floor(Math.random() * 12 + 1);
var yellowValue = Math.floor(Math.random() * 12 + 1);
var greenValue = Math.floor(Math.random() * 12 + 1);

//rest game
function reset() {
	userScore = 0;
	targetNum = Math.floor(Math.random() * 101) + 20;
	redValue = Math.floor(Math.random() * 12 + 1);
	blueValue = Math.floor(Math.random() * 12 + 1);
	yellowValue = Math.floor(Math.random() * 12 + 1);
	greenValue = Math.floor(Math.random() * 12 + 1);
// write target number to randNum div
	$('#randNum').html(targetNum);
};

//if user's score = target number alert and increment score 1. Reset game.
function numAdd() {
	if (userScore == targetNum) {
		$('#result').html("<p>You Won!</p>");
		wins++;
		$('#wins').html(wins);
		reset();
//if user's score is greater than target number alert and decrement score 1. Reset game	
	} else if (userScore > targetNum) {
		$('#result').html("<p>You Lost!</p>");
		losses++;
		$('#losses').html(losses);
		reset();
	}
};
// function to load scripts after page loads
$(document).ready(function() {

// write target number and user score to divs
	$('#randNum').html(targetNum);
	$('#userScore').html(userScore);

// crystal images click events, add random value user score and write to div
	$('#red').click(function() {
		userScore += redValue;
		numAdd();
		$('#userScore').html(userScore);
	});
	$('#blue').click(function() {
		userScore += blueValue;
		numAdd();
		$('#userScore').html(userScore);
	});
	$('#yellow').click(function() {
		userScore += yellowValue;
		numAdd();
		$('#userScore').html(userScore);
	});
	$('#green').click(function() {
		userScore += greenValue;
		numAdd();
		$('#userScore').html(userScore);
	});

});