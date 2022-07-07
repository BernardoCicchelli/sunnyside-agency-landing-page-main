let you = null;
let cpu = null;
let youScore = 0;
let cpuScore = 0;
let gameChoices = ["rock", "paper", "scissor"];


const score = document.querySelector("#score");
const youImage = document.querySelector("#you-image");
const cpuImage = document.querySelector("#cpu-image");
const buttons = document.querySelector("#buttons");

const handleClick = (el) => {
  const youChoice = el.target.id;
  console.log(youChoice);
  const cpuChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
  getResults(youChoice, cpuChoice);
  console.log(el);
  youImage.src = `./images/${youChoice}.png`;
  cpuImage.src = `./images/${cpuChoice}.png`;
};

gameChoices.forEach((choice) => {
  const img = document.createElement("img");
  img.src = `./images/${choice}-icon.png`;
  img.id = choice;
  img.addEventListener("click", handleClick);
  images.appendChild(img);
});

const getResults = (youChoice, cpuChoice) => {
  switch (youChoice + cpuChoice) {
    case "scissorpaper":
    case "rockscissor":
    case "paperrock":
    score.innerHTML = `${youScore++}:${cpuScore}`;
      break;
    case "paperscissor":
    case "scissorrock":
    case "rockpaper":
      score.innerHTML = `${youScore}:${cpuScore++}`;
      break;
      default:
        score.innerHTML = `${youScore}:${cpuScore}`
  }

};

getResults();
