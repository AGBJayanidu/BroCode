// ####################### First program ###############################

// console.log('Hello');
// console.log('I like pizza!');

// ####################### alert  ######################################

// window.alert('This is an alert!');
// alert('I like pizza!');

// ####################### change the textContent #######################

// document.getElementById('myH1').textContent = 'Hello';
// document.getElementById('myP').textContent = 'I like pizza!';

// ############################## Comment ##############################

// This is a comment
/*
    This
    is 
    a 
    Comment
*/
// ############################## Variable ##############################

// variable = A container that stores a value.
// Behaves as if it were the value it contains.

// 1. declration let x;
// 2. assignment x = 100;

// let x;
// x = 100;

// let y = 123;

// console.log(x);
// console.log(y);

// ############################## Number data type ##############################

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(age);
// console.log(price);
// console.log(gpa);

// console.log(typeof price);
// console.log(typeof age);
// console.log(typeof gpa);

// use with string literal

// console.log(`You are ${age} years old`);
// console.log(`The price is: $${price}`);
// console.log(`Your gpa is: ${gpa}`)

// ############################## String data type ##############################
// let firstName = "Basura";
// let favouriteFood = "Pizza";
// let email = "Bro123@gmail.com";

// console.log(typeof firstName);
// console.log(firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`Your favourite food is: ${favouriteFood}`);
// console.log(`Your email is: ${email}`)

// ############################## booleans data type #############################

// let online = true;
// let forSale = false;
// let isStudent = true;

// console.log(online);
// console.log(typeof online);
// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "Basura Jayanidu";
// let age = 24;
// let student = false;

// document.getElementById('p1').textContent = fullName;
// document.getElementById('p2').textContent = age;
// document.getElementById('p3').textContent = student;

// document.getElementById('p1').textContent = `Your full name is: ${fullName}`;
// document.getElementById('p2').textContent = `Your age is: ${age}`;
// document.getElementById('p3').textContent = `Are you a Student: ${student}`;

// ############################## arithmetic operators #############################

// arithmetic operators = operands(values, variables, etc.)
// operators(+ - * /)
// ex. 11 = x + 5;

// let student = 30;

// student = student + 1;
// student = student - 1;
// student = student * 2;
// student = student / 2;
// student = student ** 2;
// let extraStudents = student % 3;

// console.log(extraStudents);

// argmented assignment operators

// student += 1;
// student -= 1;
// student *= 2;
// student /= 2;
// student **=2;
// student %= 2;

// student ++;
// student--;

// console.log(student);

/*
    Operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication and division and modulo
    4. addition and subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2;
// let result1 = 12 % 5 + 8 / 2;
// let result2 = 6 / 2 **(2 + 5);

// console.log(result);
// console.log(result1);
// console.log(result2);

// ############################## accept user input #############################

// How to accept user input
// 1. Easy way = window prompt
// 2. professional way = HTML textbox

// let userName;
// userName = window.prompt("What is your username: ");
// console.log(userName);

// let userName;

// document.getElementById('mySubmit').onclick = function(){
//     userName = document.getElementById('myText').value;
//     /* console.log(userName); */
//     document.getElementById('myH1').textContent = `Hello ${userName}`;
// }

// ############################## type conversion #############################

// type conversion = change the datatype of a value to another(strings,numbers,boolean)

// let age = window.prompt("How old are you!");
// age = Number(age);
// age = age + 1;
// console.log(age, typeof age);

// let x = "Pizza";
// let y = "Pizza";
// let z = "Pizza";

// let x = "0";
// let y = "0";
// let z = "0";

// let x = "";
// let y = "";
// let z = "";

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x); // NaN -> Not a Number
// console.log(y, typeof y);
// console.log(z, typeof z);

// ############################## const ############################################

// const = a variable that can't be changed.


// radius of a circle 
// let pi = 3.14159;
// const PI = 3.14159; // const variable
// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle: ");
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(circumference);

// document.getElementById('mySubmit').onclick = function() {
//     radius = document.getElementById('myText').value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     /* console.log(circumference); */
//     document.getElementById('myH3').textContent = `The circumference is: ${circumference}cm`;
// }

// ############################## counter program ###################################

// const decreaseBtn = document.getElementById('decreaseBtn');
// const resetBtn = document.getElementById('resetBtn');
// const increaseBtn = document.getElementById('increaseBtn');
// const countLabel = document.getElementById('countLabel');
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }
// ############################## Math ###################################
// Math = built-in object that provides a collection of properties and methods

// console.log(Math.PI);
// console.log(Math.E);

// let x = 10;
// let x = 3.99;
// let x = 3;
// let x = 10;
// let x = 45;
// let x = 3;
// let y = 2;
// let z = 1;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);

// console.log(z);

// let max = Math.max(x,y,z);
// let min = Math.min(x,y, z);

// console.log(max);
// console.log(min);

// ############################## Random Number Generator #######################

// Random Number Generator
// const min = 50;
// const max = 100;

// let randoNum = Math.floor(Math.random() * (max-min)) +min;
// console.log(randoNum);

// let myButton = document.getElementById("myButton");
// let label1 = document.getElementById("label1");
// let label2 = document.getElementById("label2");
// let label3 = document.getElementById("label3");
// let min = 1;
// let max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function() {

//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;

//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

// ############################## IF STATEMENTS #######################

// if statements = if a condition is true, execute some code if not, do somthing else.

// let age = 18;

// if(age >= 18){
//     console.log("You are old enough to enter this site");
// }
// else{
//     console.log("You must be 18+ to enter this site.")
// }