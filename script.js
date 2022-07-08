/* Getting HTML Elements */
let card1 = document.getElementById("card1p")
let card2 = document.getElementById("card2p")
let card3 = document.getElementById("card3p")
let card4 = document.getElementById("card4p")
let card5 = document.getElementById("card5p")
let card6 = document.getElementById("card6p")
let card7 = document.getElementById("card7p")
let card8 = document.getElementById("card8p")

let cardone = document.getElementById("card1")
let cardtwo = document.getElementById("card2")
let cardthree = document.getElementById("card3")
let cardfour = document.getElementById("card4")
let cardfive = document.getElementById("card5")
let cardsix = document.getElementById("card6")
let playerTurn = document.getElementById("turn")
let scores = document.getElementById("score")

/* Variable Declaration */
let arrayOfOrder1 = []
let arrayOfOrder2 = []
let player = 1
let turn = 1
let choice1 = 0
let choice2 = 0
let rounds = 0
let player1score = 0
let player2score = 0
let cardId1 = 0
let cardId2 = 0
let totalScore = 0
let win = 0

/* Function Declarations */
function randomNumberGen(numOfTimesToRun) {
	let x = 1
	let arrayOfNums = []

	for (i = 1; i <= numOfTimesToRun; i++) {
		x = Math.ceil(Math.random() * 9)
		if (numOfTimesToRun == 3) {
			if (arrayOfOrder.indexOf(x) === -1) {
				arrayOfOrder.push(x)
			} else {
				i--
			}
		}
		if (arrayOfNums.indexOf(x) === -1) {
			arrayOfNums.push(x)
		} else {
			i--
		}
	}
	return arrayOfNums
}
function randomOrderGen(numOfTimesToRun) {
	let x = 1
	let arrayOfOrder = []
	for (i = 1; i <= numOfTimesToRun; i++) {
		x = Math.round(Math.random() * 3)
		if (arrayOfOrder.indexOf(x) === -1) {
			arrayOfOrder.push(x)
		} else {
			i--
		}
	}
	return arrayOfOrder
}

function playerTurnSelector(player) {
	if (player == 1) playerTurn.innerHTML = "Now Playing: P1"
	else playerTurn.innerHTML = "Now Playing: P2"
}
function playerScoreUpdater() {
	scores.innerHTML =
		"ScoreBoard: P1: " + "" + player1score + "| P2: " + "" + player2score
}
function selection(cardId) {
	if (player === 1 && turn == 1) {
		console.log("Player 1 Turn 1")
		turn = 2
		choice1 = cardId.innerHTML
		cardId1 = cardId
		cardId.style.visibility = "visible"
	} else if (player === 1 && turn == 2) {
		console.log("Player 1 Turn 2")
		choice2 = cardId.innerHTML
		cardId2 = cardId
		cardId.style.visibility = "visible"
		checkChoices()
		player = 2
		turn = 1
		setTimeout(changeVisibilityOfPlayer.bind(null, cardId1, cardId2), 1000)
		setTimeout(playerTurnSelector.bind(null, player), 500)
	} else if (player === 2 && turn == 1) {
		console.log("Player 2 Turn 1")
		turn = 2
		choice1 = cardId.innerHTML
		cardId1 = cardId
		cardId.style.visibility = "visible"
	} else if (player === 2 && turn == 2) {
		console.log("Player 2 Turn 2")
		choice2 = cardId.innerHTML
		cardId2 = cardId
		cardId.style.visibility = "visible"
		checkChoices()
		player = 1
		turn = 1
		setTimeout(changeVisibilityOfPlayer.bind(null, cardId1, cardId2), 1000)
		setTimeout(playerTurnSelector.bind(null, player), 500)
	}
}

function changeVisibility() {
	card1.style.visibility = "hidden"
	card2.style.visibility = "hidden"
	card3.style.visibility = "hidden"
	card4.style.visibility = "hidden"
	card5.style.visibility = "hidden"
	card6.style.visibility = "hidden"
	card7.style.visibility = "hidden"
	card8.style.visibility = "hidden"
}
function changeVisibilityOfPlayer(choice1, choice2) {
	changeVisibility()
}
function checkChoices() {
	if (cardId1.innerHTML == "" && cardId2.innerHTML == "") {
		return
	}
	if (choice1 === choice2 && player === 1) {
		console.log("Player 1 score")
		player1score = player1score + 1
		choice1 = 0
		choice2 = 0
		setTimeout(changeVisibilityOfPlayer.bind(null, cardId1, cardId2), 1000)
		playerScoreUpdater()
		cardId1.innerHTML = ""
		cardId2.innerHTML = ""
		console.log(cardId2)
	} else if (choice1 === choice2 && player === 2) {
		console.log("Player 2 score")
		player2score = player2score + 1
		choice1 = 0
		choice2 = 0
		rounds = rounds + 1
		setTimeout(changeVisibilityOfPlayer.bind(null, cardId1, cardId2), 1000)
		playerScoreUpdater()
		cardId1.innerHTML = ""
		cardId2.innerHTML = ""
		console.log(cardId1)
		console.log(cardId2)
	}
	totalScore = player2score + player1score
	if (totalScore == 4) endGame()
}

function startGame() {
	arrayOfNums = randomNumberGen(4)
	secondArrayOfNums = arrayOfNums
	secondArrayOfNums.reverse()
	createOrder()
	card1.innerHTML = arrayOfNums[a]
	card2.innerHTML = arrayOfNums[b]
	card3.innerHTML = arrayOfNums[c]
	card5.innerHTML = arrayOfNums[d]
	card4.innerHTML = secondArrayOfNums[e]
	card6.innerHTML = secondArrayOfNums[f]
	card7.innerHTML = secondArrayOfNums[g]
	card8.innerHTML = secondArrayOfNums[h]
	changeVisibility()
}

function createOrder() {
	arrayOfOrder1 = randomOrderGen(4)
	arrayOfOrder2 = randomOrderGen(4)
	a = arrayOfOrder1[0]
	b = arrayOfOrder1[1]
	c = arrayOfOrder1[2]
	d = arrayOfOrder1[3]
	e = arrayOfOrder2[0]
	f = arrayOfOrder2[1]
	g = arrayOfOrder2[2]
	h = arrayOfOrder2[3]
}
function endGame() {
	if (player1score > player2score) {
		win = 1
		alert("Player 1 Has Won the Game")
	} else if (player2score > player1score) {
		win = 2
		alert("Player 2 Has Won the Game")
	} else {
		win = 3
		alert("Game has ended as a draw")
	}
}
startGame()
