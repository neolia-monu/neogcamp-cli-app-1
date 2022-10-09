import readlineSync from "readline-sync";
import chalk from "chalk";

var score = 0;
var called = true;

function play(question, answer) {

  if (score >= 5 && called) {
    console.log(chalk.blue("Congratulations you are moved to the level 2"));
    console.log("");
    called = false;
  }

  var userAnswer = readlineSync.question(question);

  if (answer === "greet") {
    console.log(chalk.cyanBright("Welcome, " + userAnswer + "! Have a great day!"));
    if (score >= 5)
      score = score + 2;
    else
      score = score + 1;
  } else if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Great!"));
    if (score >= 5)
      score = score + 2;
    else
      score = score + 1;
    // } 
    // } else if(answer.toLowerCase() === "good"){
    //     console.log(chalk.cyan("Great! You are amazing."));
    // if(score >= 5)
    //   score = score + 2;
    // else
    //   score = score + 1;
  } else {
    console.log(chalk.red("wrong :("));
  }

  console.log("Current score: ", score);
  console.log("--------------------");
}

var questions = [
  {
    question: "Do I watch anime? ",
    answer: "Yes"
  },
  {
    question: "My favorite anime character! ",
    answer: "Goku"
  },
  {
    question: "What is my favorite food? ",
    answer: "Pizza"
  },
  {
    question: "Do I have friends? ",
    answer: "No"
  },
  {
    question: "My birth date is? ",
    answer: "01"
  },
  {
    question: "Does we hangout with each other? ",
    answer: "yes"
  },
]

console.log(chalk.blue("How well do you know me"));

var name = readlineSync.question("What is your name? ");

chalk.cyanBright("Welcome, " + name + "! Have a great day!");
chalk.cyanBright("I hpoe you like the game :) ");


for (var i = 0; i < questions.length; i++)
  play(questions[i].question, questions[i].answer);

console.log(chalk.greenBright(name + "'s Final Score is: ", score));