let firstCard = 3;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el")

function startGame() {
 renderGame()
}  

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Card: "

for (let i = 0; i < cards.length; i++){
  cardEl.textContent += cards[i] + " "
}

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message)
}


function newCard() {
  let card = 7;
  sum += card;
  cards.push(card);
  renderGame();
}