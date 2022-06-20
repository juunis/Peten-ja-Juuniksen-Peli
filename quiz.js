// QUIZ GAME

// For user inputs -> npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });
const answer = prompt("WELCOME TO OUR QUIZ! DO YOU WANT TO PLAY? ");

if answer === "yes" {
  let score = 0;
  let question = 1;
    let question1 = prompt("QUESTION 1:  A, B, C, or D? ");
    if (question1 === "B") {
      score++;
    }
}





