#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("\n=====> WellCome to Cli CalCulator <=====\n"));
const answer = await inquirer.prompt([
  {
    message: chalk.green("Enter first Number ===>"),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.green("Enter second Number ===>"),
    type: "number",
    name: "secondNumber",
  },

  {
    message: chalk.bgMagenta.bold.white(
      "select one of the operator to perform action"
    ),
    type: "list",
    name: "operator",

    choices: [
      chalk.yellow.bold.yellowBright("Addition"),
      chalk.blue.bold.blueBright("Subtraction"),
      chalk.green.bold.greenBright("Multiplication"),
      chalk.red.bold.redBright("Division"),
      chalk.magenta.bold.magentaBright("Modulus"),
      chalk.cyan.bold.cyanBright("Square"),
    ],
  },
]);

// Conditional Statement:
if (answer.operator === chalk.yellow.bold.yellowBright("Addition")) {
  console.log(
    chalk.yellow.bold.yellowBright(
      `${answer.firstNumber} + ${answer.secondNumber} = ${
        answer.firstNumber + answer.secondNumber
      }`
    )
  );
} else if (answer.operator === chalk.blue.bold.blueBright("Subtraction")) {
  console.log(
    chalk.blue.bold.blueBright(
      `${answer.firstNumber} - ${answer.secondNumber} = ${
        answer.firstNumber - answer.secondNumber
      }`
    )
  );
} else if (answer.operator === chalk.green.bold.greenBright("Multiplication")) {
  console.log(
    chalk.green.bold.greenBright(
      `${answer.firstNumber} * ${answer.secondNumber} = ${
        answer.firstNumber * answer.secondNumber
      }`
    )
  );
} else if (answer.operator === chalk.red.bold.redBright("Division")) {
  console.log(
    chalk.red.bold.redBright(
      `${answer.firstNumber} / ${answer.secondNumber} = ${
        answer.firstNumber / answer.secondNumber
      }`
    )
  );
} else if (answer.operator === chalk.magenta.bold.magentaBright("Modulus")) {
  console.log(
    chalk.magenta.bold.magentaBright(
      `${answer.firstNumber} % ${answer.secondNumber} = ${
        answer.firstNumber % answer.secondNumber
      }`
    )
  );
} else if (answer.operator === chalk.cyan.bold.cyanBright("Square")) {
  console.log(
    chalk.cyan.bold.cyanBright(
      `${answer.firstNumber} ** ${answer.secondNumber} = ${
        answer.firstNumber ** answer.secondNumber
      }`
    )
  );
} else {
  console.log(chalk.bgBlack.bold.red("\nplease select valid operator"));
}
console.log(chalk.bgBlue.bold.white("\nHere you Hava a Answer "));
