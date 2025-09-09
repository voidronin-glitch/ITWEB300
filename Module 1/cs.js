let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

const cardWidth = 80;
const cardHeight = 100;
const suits = ["hearts", "diamonds", "clubs", "spades"];

// Assign suit images to suitImages array
let suitImages = [];
for (let i = 0; i < suits.length; i++) {
   suitImages[i] = document.getElementById(suits[i]);
}

// Draw cards after images have finished loading
window.addEventListener("load", drawCards);

function drawCards() {
   // Diagonal gradient for the background
   let gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
   gradient.addColorStop(0, "lightskyblue");
   gradient.addColorStop(1, "dodgerblue");
   context.fillStyle = gradient;
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Display some cards
   let rank = 6;
   for (let i = 0; i < 5; i++) {
      drawCard(50 * i + 10, 5, rank++, 0);  
      drawCard(20 * i + 10, 140, "A", 3); 
   }
}

function drawCard(x, y, rank, suit) {   
   // Font properties
   context.font = "bold 10pt Arial";
   context.textBaseline = "top";
   context.textAlign = "center";
   
   // Card with a shadow
   context.shadowBlur = 10;
   context.shadowOffsetX = 2;
   context.shadowOffsetY = 2;
   context.shadowColor = "black";
   context.fillStyle = "white";
   context.fillRect(x, y, cardWidth, cardHeight);
   
   // Turn off shadows   
   context.shadowBlur = 0;
   context.shadowOffsetX = 0;
   context.shadowOffsetY = 0;

   // Top-left
   context.fillStyle = "red";
   context.fillText(rank, x + 9, y + 4);

   // Draw the suit in the center of the card
   let cardX = x + (cardWidth - suitImages[suit].width) / 2;
   let cardY = y + (cardHeight - suitImages[suit].height) / 2;
   context.drawImage(suitImages[suit], cardX, cardY);
}
