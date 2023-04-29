//1
//Write a program to take “city” name as input from user.
// If user enters
//“Karachi”, welcome the user like this: “Welcome to city of lights”

//var a = prompt("City Name");
// if( a=="Karachi"){
//     console.log("Welcome to city of light");
// }

//2
//Write a program to take input color of road traffic signal from the user
//& show the message according to this table:

// var a = prompt("Color of road Traffic Signal");
 
// if(a="Red"){
//     console.log("Must Stop");
// }
//  else if(a="Yellow"){
//     console.log("Ready To Move");
// }


// else if(a="green"){
//     console.log(" Move Now");
// }


// 4. Write a program to take input the marks obtained in three subjects &
// total marks. Compute & show the resulting percentage on your page.
// Take percentage & compute grade as per following table:

// var a = prompt("Marks Obained")
// if( a =="Greater than or Equal to 80"){
//     console.log("A-one");
//     console.log("Exellent");
// }
// else if("Greater than or Equal to 70"){
//     console.log("A");
//     console.log("Good");
// }
// else if("B"){
//     console.log("B");
//     console.log("You Need More Improve");
// }
// else {
//     console.log("Fail");
//     console.log("Sorry");
// }

// var a = prompt("Final Result");
// if( a =="Total Marks"){
// console.log("300");
// }
// else if("My Marks"){
//     console.log("Marks Obtained 256");
//     console.log(" Persentage 78%");
//     console.log("Grade B+");
//     console.log("Please more Improve");
// }

// var a = prompt("Try Your luck guess the number between 1 and 10");
// if(a =="6"){
//     console.log("100$");
// }
// else if(a =="7"){
// console.log("So close to anwer");
// }

// else {
//     console.log("Try Again");
// }

// 6. Write a program that checks whether the given input is an even
// number or an odd number.

// var number = prompt("Enter a number: ");

// if (number % 2 === 0) {
//   console.log(number + " is even.");
// } else {
//   console.log(number + " is odd.");
// }

// 7. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:

// var num1 = prompt("Enter Your First Number");
// var num2 = prompt("Enter Your Second Number");
// var operator = prompt("Enter your operator");

// if(operator ==="+"){
//     console.log(num1 + number2);
// }
// else if(operator === "-"){
//     console.log(num1 - num2);
// }

// else if(operator === "*"){
//     console.log(num1 * num2);
// }
// else if(operator === "/"){
//     console.log(num1 / num2);
// }
// else if(operator === "%"){
//     console.log(num1 % num2);
// }
// else {
//     console.log("Not a Oprator");
// }

// Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.

// var num = parseFloat(prompt("Enter Your Number"));
// if(number > 0){
//     console.log("This number is positive");
// }
// else if(number < 0){
//     console.log("This number is Nagitive");
// }
// else {
//     console.log("This number is zero");
// }

// Write a program that takes a character (i.e. string of length 1) and
// returns true if it is a vowel, false otherwise

// var vovel = prompt("Write a Alphabet");
// if(vovel == "a" || vovel == "e" || vovel == "i" || vovel == "o" || vovel == "u"){
// console.log("Is a vovel");
// }
// else{
//     console.log("Is not vovel");
// }




var userPassword = prompt("Enter your password:");

if (correctPassword === "Agha123") {
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}


