$(function() {

//VARIABLES --------------------------

var playerOneColor = '#EEF0F2';

var playerTwoColor = '#BDEDE0';

var playerOneMove = "X";

var playerTwoMove = "O";

var playerOneWins = -1;

var playerTwoWins = -1;

var playerTurn = 1;

// $('p:first').attr('class', 'playerTurn');


// var turn = 0; //turn 0 is playerOne, turn 1 is playerTwo, alternates after each move

var gameBoard = [null, null, null, null, null, null, null, null, null];  //creating gameboard to record players' moves


//ANIMATIONS --

$('.box').animate({
	'width': '150px',
	'height': '150px',
	'border-radius': '100px'
}, 1300);

// $('.box').mouseover(function () {
// 	$(this).css('background-color', 'yellow');
// });

// $('.box').mouseout(function () {
// 	$(this).css('background-color', '');
// });



//FORMULA TO TURN 'CLASSNAMES' INTO ARRAY FORM --

// replaced by jQuery
			// var elementsArray = [];
			// var elements = $('.box');

			// for (var i = 0; i < elements.length; i++) {
			// 	elementsArray.push(elements[i]);
			// }


			

//GAME FUNCTIONALITY --------------------------

// replaced by jQuery
			// for (var j = 0; j < elementsArray.length; j++) {
			    
			//     var element = elementsArray[j];

			//     element.addEventListener("click", function ()

    $('.box').click(function () {

    	if (gameBoard[$('.box').index(this)] === null) {

        	// if ($('p:first').hasClass('playerTurn')) { -- jQuery toggle not working

        	if (playerTurn === 1) {

        	$(this).css('background-color', playerOneColor);
        	gameBoard.splice(($('.box').index(this)), 1, 'X');
        	console.log(gameBoard);
        	playerTurn = 0;
        	getWinner();

        	// $('p:first').toggleClass('playerTurn'); -- jQuery toggle not working



        } 	else {

        	$(this).css('background-color', playerTwoColor);
        	gameBoard.splice(($('.box').index(this)), 1, 'O');
        	console.log(gameBoard);
        	playerTurn = 1;
        	getWinner();
        	// $('p:first').toggleClass('playerTurn'); -- jQuery toggle not working


        }
    }
    });
// }




//WINNER - HOW TO FIND THE WINNER ---------------------------

function getWinner() {

	//VARIABLES --

var boxA = gameBoard[0];
var boxB = gameBoard[1];
var boxC = gameBoard[2];
var boxD = gameBoard[3];
var boxE = gameBoard[4];
var boxF = gameBoard[5];
var boxG = gameBoard[6];
var boxH = gameBoard[7];
var boxI = gameBoard[8];

	//WINNER LOGIC --

if         (boxA === 'X' && boxB === 'X' && boxC === 'X' ||
			boxD === 'X' && boxE === 'X' && boxF === 'X' ||
			boxG === 'X' && boxH === 'X' && boxI === 'X' ||
			boxA === 'X' && boxD === 'X' && boxG === 'X' ||
			boxB === 'X' && boxE === 'X' && boxH === 'X' ||
			boxC === 'X' && boxF === 'X' && boxI === 'X' ||
			boxA === 'X' && boxE === 'X' && boxI === 'X' ||
			boxC === 'X' && boxE === 'X' && boxG === 'X')	{

	console.log("Player One Wins!");
	alert("Player One Wins!");
	playerOneWins += 1;
	console.log(playerOneWins);
	showTattoo();
	//ADD ANIMATION
	restartGame();

} else if  (boxA === 'O' && boxB === 'O' && boxC === 'O' ||
			boxD === 'O' && boxE === 'O' && boxF === 'O' ||
			boxG === 'O' && boxH === 'O' && boxI === 'O' ||
			boxA === 'O' && boxD === 'O' && boxG === 'O' ||
			boxB === 'O' && boxE === 'O' && boxH === 'O' ||
			boxC === 'O' && boxF === 'O' && boxI === 'O' ||
			boxA === 'O' && boxE === 'O' && boxI === 'O' ||
			boxC === 'O' && boxE === 'O' && boxG === 'O')	{	

	console.log("Player Two Wins!");
	alert("Player Two Wins!");
	playerTwoWins += 1;
	console.log(playerTwoWins);	
	showTattoo();
	//ADD ANIMATION
	restartGame();

} else if  (boxA !== null &&
			boxB !== null &&
			boxC !== null &&
			boxD !== null &&
			boxE !== null &&
			boxF !== null &&
			boxG !== null &&
			boxH !== null &&
			boxI !== null)	{

	console.log("Tie - Cat's Game!");
	alert("Tie - Cat's Game!");
	//ADD ANIMATION - CAT POPPING OUT
	restartGame();

}
}

//TATTOO VISIBILITY --------------------------

function showTattoo() {

	//WHOEVER THE WINNER IS, BRING BACK THEIR TATTOO; -- End in player's trurn

	if (playerTurn === 0 && playerOneWins >= 0) {

		$('.left:eq('+playerOneWins+')').css('opacity', 1);
	
	} else if (playerTurn === 1 && playerTwoWins >= 0) {

		$('.right:eq('+playerTwoWins+')').css('opacity', 1);

	}
};

//RESTART GAME --------------------------

$('#button').click(function () {
	restartGame();
});

	//LOGIC --	

function restartGame() {
	$('.box').css('background-color', 'white');
	// $('p:first').toggleClass('playerTurn'); -- jQuery toggle not working
	playerTurn = 1;
	gameBoard = [null, null, null, null, null, null, null, null, null];
	console.log(gameBoard);
}


})







