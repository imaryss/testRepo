//curs 15.05


document.write('Ion Maria');
alert('Azi am inceput sa scriu cod in Js');
var a=2;
var b=3;
var c=a+b;
var d=a*b;
c++;
document.write(c);
c--;
document.write(c);
var reminder=10%3;
console.log(reminder);

c+=reminder
console.log(c)

a="Maria";

//* When u try to use mathematical operator on strings you get//*


console.log(a/2);
console.log(a+3);
console.log(typeof a);
console.log(typeof c);
console.log(typeof (a+3));

//*types of data in JavaScript

/*
     1.Number: 
a. integer(ex. 0,1,2,3,4)
b. double(ex. 2,5, -17)

    2. String
"Ion Mariana", "a", ".."

    3. Boolean (logical type)
true or false
*/

var number1=1;
var number=2.5;
var firstName="Alexandra";
var isAdult=true;
var hasPension=false;

var number2;
var g;
g='t'*7;

/* Null (atunci cand nu exista valoare)*/

/* strings */
/*   "+" for strings means concatenational operator and not mathematical "+" operator*/

var lastName="Ion";
var fullName="firstName"+"lastName";
console.log(fullName);

//operations with strings 
console.log("the position l is", fullName.indexOf('l'));
console.log(fullName.length);
console.log(fullName.substring(3,5))


//*------------- comparison operators-----------

/* 1. <,>, <=, >=, !(meaning "not"), ==(loose equality operator), === (string equality operator)
*/
console.log(1<2)
console.log("//*------------- comparison operators-----------")
console.log(1>2);
console.log(1<=2);
console.log(1>=1);
console.log(!true);
console.log(1=='1');
console.log(1==='1');
console.log(!!true);
console.log(2 !='2');


//* ----- if statement -----

var age=19;
if (age>=18) {
        alert("Congrats, you're an adult!!");
}


else {
    alert("Enjoy your childhood");
}


var budget= 5000;

if (budget> 1000) {
        alert("Let's go buy some discs.")
}

else if (budget<0) {
    alert("you have to pay your debts")
}

else {
        alert("Your budget is not big enough.")
}

/* Exercise if else : create a variable dayOfTheWeek. 
Put a string value inside; check with if else what is the day of the week 
and put  a different message for each day*/ 


var dayOfTheWeek="Monday"

var dayOfTheWeek= "Avatar";
console.log(dayOfTheWeek);
// if (dayOfTheWeek=="Friday"){
//     alert("Yey!");
// }
// else if (dayOfTheWeek="Monday"){
//     alert("Oh no!");
// }
// else if (dayOfTheWeek="Tuesday"){
//     alert("Oh no!");
// }
// else if (dayOfTheWeek="Wednesday"){
//     alert("Oh no!");
// }
// else if (dayOfTheWeek="Thursday"){
//     alert("Oh no!");
// }
// else if (dayOfTheWeek="Sunday"){
//     alert("Oh no!");
// }
// else if (dayOfTheWeek="Saturday"){
//     alert("Oh no!");
// }

// else {
//     alert("This is not the day of the week");
// }

// if (dayOfTheWeek=="Monday"&&budget>=1000){
//     alert("Let's but pizza!");
// }
// if (dayOfTheWeek=="Sunday||Tuesday"){
//     alert("Sunday or Tuesday");
// }

switch(dayOfTheWeek){
    case "Monday":
    alert("It's Monday go to work");
    break;
    case "Tuesday":
    alert("It's Tuesday go to work");
    default:
        alert("It's Weekend");
}


// You are given two variables: a = "Avatar" and b = 100;
// Print to the console the text
//  "The movie starts with 'A' and the budget is above 0" 
//  if the first letter of a is "A" and the b(budget) 
//  is positive

var a="Avatar"
var b="100"


/*Aici ar trebui sa am cursul de pe 21 cand am lipsit*/ 