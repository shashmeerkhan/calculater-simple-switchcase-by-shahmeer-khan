import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        message: "Enter your first number",
        name: "Num1",
    },
    {
        type: "number",
        message: "Enter your second number",
        name: "Num2",
    },
    {
        type: "list",
        message: "Choose an operation",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
// step 02
const { Num1, Num2, operator } = answer;
//step 03
let result;
switch (operator) {
    case "+":
        result = Num1 + Num2;
        break;
    case "-":
        result = Num1 - Num2;
        break;
    case "*":
        result = Num1 * Num2;
        break;
    case "/":
        result = Num1 / Num2;
        break;
    default:
}
console.log("invalid operator");
console.log(`${Num1} ${operator} ${Num2} = ${result}`);
