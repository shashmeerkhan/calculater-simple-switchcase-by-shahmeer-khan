#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t This is CLI base simple calculator \n"));
const answer = await inquirer.prompt([
    {
        type: "number",
        message: chalk.yellow("Enter your first number"),
        name: "Num1",
    },
    {
        type: "number",
        message: chalk.yellow("Enter your second number"),
        name: "Num2",
    },
    {
        type: "list",
        message: "Choose an operation",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// step 02
const { Num1, Num2, operator } = answer;
//step 03
let result;
switch (operator) {
    case "Addition":
        result = Num1 + Num2;
        break;
    case "ubtraction":
        result = Num1 - Num2;
        break;
    case "Multiplication":
        result = Num1 * Num2;
        break;
    case "Division":
        result = Num1 / Num2;
        break;
    default: console.log(chalk.red("invalid operator"));
}
console.log(chalk.green.bold(`\n \t ${Num1} ${operator} ${Num2} = ${result}\n`));
