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

// ############################## accept user input #############################