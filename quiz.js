// QUIZ GAME

// For user inputs -> npm install prompt-sync
const kysymysLista = require("./kysymykset.json");
const prompt = require("prompt-sync")({ sigint: true });
const answer = prompt("HALUATKO PELATA? ");

if (answer === "joo") {
  let score = 0;
  for (let i = 0; i < kysymysLista.length; i++) {
    let question = prompt(`${kysymysLista[i].kysymys}
    Vaihtoehdot: ${kysymysLista[i].vaihtoehdot}`);

    if (question === kysymysLista[i].oikeav) {
      score++;
      console.log(`Vastasit oikein!`);
    } else console.log(`Väärin meni!`);
  }
  console.log(`Sait ${score}/${[kysymysLista.length]}.`);
} else {
  console.log("Ai etkö halua pelata? No, näkeemiin sitten!");
}
