let userName = "Sandeep Lakhiwal"

let dcName = document.getElementById('user-name')

dcName.innerText = userName

// let firstName = prompt("Enter Your First Name: ")
// let lastName = prompt("Enter Your Last Name")
// let fullName = firstName + " " + lastName
// console.log(fullName)
// function greet(){
//     greeting = "Hii there, " + firstName + '!'
//     console.log(greeting)
// }
// greet()

// let myPoints = 3;
// function add3points(){
//     myPoints += 3;
//     console.log(myPoints)
//     return myPoints
// }
// function remove1point(){
//     myPoints -= 1;
//     console.log(myPoints)
//     return myPoints
// }
// console.log(myPoints)

// add3points()
// add3points()
// add3points()
// remove1point()
// remove1point()
// console.log(myPoints);
// console.log('my points '+6+5);
// const errorMessage = 'Something went wrong, please try again.'
// function error(){
//     document.getElementById('error').textContent = errorMessage;
// }

// let num1 = Number(prompt('Enter 1st Number'));
// let num2 = Number(prompt('Enter 2nd Number'));
// const num1El = document.getElementById('num1-el')
// const num2El = document.getElementById('num2-el')
// const operatorEl = document.getElementById('operator-symbol')
// const resultEl = document.getElementById('result')

// num1El.textContent = num1
// num2El.textContent = num2

// function add(){
//     operatorEl.textContent = '+';
//     let addition = num1+num2;
//     resultEl.textContent = addition;
//     console.log('Helo world')
// }
// function subtract(){
//     operatorEl.textContent = '-';
//     let subtraction = num1-num2;
//     resultEl.textContent = subtraction
// }
// function multiply(){
//     operatorEl.textContent = '*';
//     let multiplication = num1*num2;
//     resultEl.textContent = multiplication
// }
// function divide(){
//     operatorEl.textContent = '/';
//     let dividation = num1/num2;
//     resultEl.textContent = dividation
// }

// let firstCard = Math.floor(Math.random()*10);
// let secondCard = Math.floor(Math.random()*10);
// console.log(firstCard);
// console.log(secondCard);
// let sum = firstCard + secondCard;
// console.log("sum: ", sum)

let sentence = ['Hello', 'my', 'name', 'is', 'Sandeep', 'Lakhiwal.']
let greetingEl = document.getElementById('greeting-el')
for(let i=0; i<sentence.length; i++){
    console.log(sentence[i])
    greetingEl.textContent += sentence[i] + ' '
}