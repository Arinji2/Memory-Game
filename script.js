let card1 = document.getElementById("card1p")
let card2 = document.getElementById("card2p")
let card3 = document.getElementById("card3p")
let card4 = document.getElementById("card4p") 
let card5 = document.getElementById("card5p") 
let card6 = document.getElementById("card6p") 
let card7 = document.getElementById("card7p") 
let card8 = document.getElementById("card8p")


function randomNumberGen(numOfTimesToRun) {
    let x = 1
    let arrayOfNums = []
 for(i = 1; i<=numOfTimesToRun; i++){
 x = (Math.ceil(Math.random() * 9)) 
 arrayOfNums.push(x)
}
/*let uniqueNums = [...new Set(arrayOfNums)];
if(uniqueNums.length != 4){
randomNumberGen(4)}
console.log(uniqueNums) */
return arrayOfNums
}

function startGame() {
    arrayOfNums = randomNumberGen(4)
    secondArrayofNums = arrayOfNums
    secondArrayofNums.reverse()
    card1.innerHTML = arrayOfNums[0]
    card2.innerHTML = arrayOfNums[1]
    card3.innerHTML = arrayOfNums[2]
    card5.innerHTML = arrayOfNums[3]
  
}
startGame()
