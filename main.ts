let accountBalance = 35000
console.log("Welcome to Shazil's ATM")
import inquirer from "inquirer";
let myPin = await inquirer.prompt([
    {message: "Please enter your pin code:", type: "number", name: "pinCode"}
]);
let close = false
while(!close) {
    if (myPin.pinCode==1234) {console.log("Login successfully!")
    
let userChoice =  await inquirer.prompt([
{
        message: "please select a choice",
        name: "operator",
        type: "list",
        choices: ["check balance","withdraw", "exit"]
    }
]);
if (userChoice.operator=="check balance") {{console.log("Your current account balance is:", accountBalance)}
let transaction2= await inquirer.prompt([
{
    message: "Do you want to perform another transaction?",
    type: "list",
    name: "anotherTransaction",
    choices: ["yes", "No"]
}
])
if (transaction2.anotherTransaction=="No") {close=true, console.log("Thank you for using this ATM")}
}
else if (userChoice.operator=="withdraw") {
    let withdrawAmount = await inquirer.prompt([
        {
        message: "Please enter amount to withdraw",
        type: "number",
        name:"enteredAmount",
    }
])
if (withdrawAmount.enteredAmount>accountBalance) {console.log("Sorry! you have insufficient funds");
 let transaction3= await inquirer.prompt([
{
    message: "Do you want to perform another transaction?",
    type: "list",
    name: "anotherTransaction3",
    choices: ["yes", "No"]
}
])
    if (transaction3.anotherTransaction3=="No") {close=true, console.log("Thank you for using this ATM")}}
else if (withdrawAmount.enteredAmount==0) {console.log("Please enter a valid amount")}
else if (withdrawAmount.enteredAmount<=accountBalance) 
    {accountBalance-=withdrawAmount.enteredAmount, 
    console.log("Transaction successfull! Your Remaining Account Balance is:", accountBalance); 
    let transaction4= await inquirer.prompt([
        {
            message: "Do you want to perform another transaction?",
            type: "list",
            name: "anotherTransaction4",
            choices: ["yes", "No"]
        }
        ])
            if (transaction4.anotherTransaction4=="No") {close=true, console.log("Thank you for using this ATM")}}}

else if (userChoice.operator == "exit") { close = true, console.log("Thank you! see you again", )};
}
else if  (myPin.pinCode!==1234) {close=true, console.log("Please Enter correct pin Code")}}