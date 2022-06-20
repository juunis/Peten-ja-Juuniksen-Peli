"use strict";
// QUIZ GAME

// For user inputs -> npm install prompt-sync
const kysymysLista = require("./kysymykset.json");
const prompt = require("prompt-sync")({ sigint: true });
const answer = prompt("HALUATKO PELATA? joo/ei? ");

if (answer === "joo") {
  let score = 0;
  for (let i = 0; i < kysymysLista.length; i++) {
    console.log(`${kysymysLista[i].kysymys}
    Vastausvaihtoehdot: ${kysymysLista[i].vaihtoehdot}`);
    let question = prompt(`Vastauksesi: `);

    if (question.toUpperCase() === kysymysLista[i].oikeav) {
      score++;
      console.log(`Vastasit oikein! \n`);
    } else console.log(`Väärin meni! \n`);
  }
  console.log(`Sait ${score}/${[kysymysLista.length]}.`);
} else {
  console.log("Ai etkö halua pelata? No, näkeemiin sitten!");
}
