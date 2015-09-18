/*

//STEP 1
varSomeMonth
functionTheMonth
currentMonth
varSummerMonth
myLibraryAFunction

//STEP 2
console.log("numeric literal expression:"); 
var start = 10;
var increase = start ++;
console.log(increase);

console.log("string literal expression:");
var favFood = "pizza";
console.log("But potatoes is better than " + favFood +".");

console.log("boolean literal expression:");
var x = 10;
var y = 15;
console.log(x <= y);

console.log("null literal expression:");
var z;
console.log(z);

//STEP 3 -- Versus literal expressions (3, "Hello", false, null, etc...)
var complexExpression1 = (10 * (5+4)) <= 80;
console.log(complexExpression1); //returns false
var complexExpression2 = complexExpression1 != true;
console.log(complexExpression2); //returns true

//STEP 4 
var firstName;
var lastName;
var strAddress;
var stCity;
var stState;
var zipCode;
var yourAge;
var referralSource;
var mayWeContactYou;

//STEP 5 -- Refer to slide 21 of lecture 2.ppt
//Assigning Variables Method 1
var firstName;
var lastName;
var stAddress;
var strCity;
var strState;
var zipCode;
var yourAge;
var referralSource;
var mayWeContactYou;

firstName = "Paul";
lastName = "Su";
strAddress = "555 Redhound Blvd";
strCity = "Baltimore";
strState = "Maryland";
zipCode = 21276;
yourAge = 72;
referralSource = "magazine";
mayWeContactYou = true;

//Assigning Variables Method 2
var firstName = "Paul";
var lastName = "Su";
var strAddress = "555 Redhound Blvd";
var strCity = "Baltimore";
var strState = "Maryland";
var zipCode = 21276;
var yourAge = 72;
var referralSource = "magazine";
var mayWeContactYou = true;

//Assigning Variables Method 3"
var firstName = "Paul", lastName = "Su", strAddress = "555 Redhound Blvd", strCity = "Baltimore", strState = "Maryland", zipCode = 21276, yourAge = 72, referralSource = "magazine", mayWeContactYou = true;
*/

//STEP 6 -- slide 23
var coercion1 = 14 + "fourteen";
console.log(coercion1); //will yield "14fourteen", a string!

var coercion2 = (14<5) + " yikes!";
console.log(coercion2); //will yield "false yikes!", a string!

var coercion3 = 1 + true;
console.log(coercion3); //will yield "2", a number!




