// var newArray =[]
// for (var i=0; i< myArray.length; i++){
//     if(newArray.indexOf(myArray[i]) < 0){
//         newArray.push(myArray[i])
//     }
// }



// function results(){
//     if()
// }
// const exams = [
//     { 'exam1':[10, 0, 10],
//       'exam2':[9.50,4],
//       'exam3':[8,9.50,8],
//     }
// ];

// const students3= [10, 0, 10, 9.50, 5, 4, 8, 9.50, 8]





// console.log("inainte de my a");
// const myArray = [12, 34, 56, 34, 72, 12];
// var newArray =[]
// for (var i=0; i< myArray.length; i++){
//     if(newArray.indexOf(myArray[i]) < 0){
//         newArray.push(myArray[i])
//     }
// }
// console.log(myArray);
// const mySet= new Set();

// mySet.add(myArray[0]);
// mySet.add(myArray[1]);
// mySet.add(myArray[2]);
// mySet.add(myArray[3]);
// mySet.add(myArray[4]);
// mySet.add(myArray[5]);
// console.log(mySet);
// mySet.add(`Caractere`);
// mySet.add(true);
// mySet.add({prop1: 96, prop2: false, prop3: 'blaze'})
// mySet.has(12);
// console.log(mySet.has(13));
// console.log(mySet.has(Math.sqrt(144)));
// console.log(mySet.size);

// console.log(mySet);







// class User {
//    constructor(student1, student2, student3) {
//       this.student1=[10, 9.50, 8];
//       this.student2= [0,5,9.50];
//       this.student3 = [10, 4, 8];


//    }
// }

// const exams = [
//     { 'exam1':[10, 0, 10],
//       'exam2':[9.50,4],
//       'exam3':[8,9.50,8],
//     }
// ];
console.log("------------ex1--------------------------")
//Printati pe ecran in prima linie 
//- si nu in consola  - numele vostru
document.write("Ion Mariana");
//In cadrul fisierul javascript creati 3 variable a, b, c
//oferiti o valoare numerica pentru primele 2 variabile iar
//pentru a treia variabila - acesta va fi suma primelor 2
a=10;
b=15;
c=20;
d=a*b;
//Printati valoare lui c folosing notatia ++ si notatia
// -- asa cum am facut la curs
console.log(d);
c++;
console.log(c);
c--;
console.log(c);
//. Afisati restul impartirii lui 10 la 3 
//si stocati rezultatul intr-o variabila. Denumiti-o reminder.

var reminder=10%3;
console.log(reminder);
var short= c+=reminder;
console.log(short);

z="Maria";
console.log(z);
console.log(z/2);
console.log(z+3);
console.log(typeof (z+3))

console.log("----exercitiu gmail----")
var gmail= "marius.monea89@gmail.com";
console.log("the position of letter u is ", gmail.indexOf('u'));
console.log(gmail.indexOf("s"));
console.log(gmail.substring(-1,6))

console.log("sama uit peste dif dintre slice si subsring")
// const sentence = 'Mastering JS is a very helpful website';
// console.log(sentence.substring(12, 0)); // 'Mastering JS'
// console.log(sentence.substring(0, 12));

console.log("----------------ex:If--------------------")
// Exercise if else : create a variable dayOfTheWeek. 
// Put a string value inside; check with if else what 
// is the day of the week and put  a different message 
// for each day

var dayOfTheWeek= "Tuesday";

if(dayOfTheWeek=="Tuesday"){
    console.log("merge");
}else if(dayOfTheWeek=="Sunday"){
    console.log("is Sunday")
}else if(dayOfTheWeek=="Monday"){
    console.log("is Monday")
}else if(dayOfTheWeek=="Friday"){
    console.log("is Friday")
}else if(dayOfTheWeek=="Wednesday"){
    console.log("is Wednesday")
}else if(dayOfTheWeek=="Wednesday"){
    console.log("is Wednesday")
}

var dayOfTheWeek="Monday";
console.log(dayOfTheWeek);


console.log("---Strings---");
//Exercise: You are given two variables: a = "Avatar" and b = 100;
//Print to the console the text "The movie starts with 'A' and the budget is above 0", 
//if the first letter of a is "A" and the b(budget) is positive
 m = "Avatar"; 
 n = 100;
 l= m.substring(0,1);
 console.log(l)
if(l=="A" && n<10 ){// sau poti sa faci if(m.substring(0,1)=="A")
    console.log("The movie starts with 'A' and the budget is above 0")
}else{
    console.log("not working")
}
//You have two variables with strings inside. Check which one has more characters 
//and print a message to the console like ("Variable a has more characters and it has X chars");

var string1= "unuunuunu";
var string2= "doidoidoidoi";
console.log(string1.length);
console.log(string2.length);
if(string1.length>string2.length){
    console.log("string1>string2")
}else if(string2.length>string1.length){
    console.log("string1>string2")
}
//You are given the string "AAABBABABABABBBBAAA"; print to the console how many characters "A" and 
//how many characters "B" you have inside



// * 1. Se o variabila x. Aceasta ia valoarea numelui vostru de familie. Printati in consola.
// 9:51
//* 2. Adaugati o a doua variabila care sa contina prenumele. Printati in consola
// 9:51
//* 3.Creati o a treia variabila care sa contina numele vostru comple, folosing primele 2 variabile
// 9:52
// *4. A patra variabila este legata de varsta voastra. La fel, printati catre ecran
// 9:52
// *5. A cincea variabila este de tip boolean si va contine dc aveti sau nu carnet de conducere
// 9:53
// *6. Printati pe ecran un mesaj care sa contina numele vostru intreg, varsta si valoarea variabilei boolean
// 9:53
// *7. Folosing if statement printati pe ecran un mesaj diferit pentru fiecare valoare posibila a variabilei boolean
// 9:54
// ^ex: "NUmele meu este Marius Monea, am 32 de ani si NU conduc masini, pentru ca nu am carnet de conducere"
// 9:54
// ^la mine asta e cazul, la restul poate sa fie conduc masini, pentru ca am carnet de conducere


var lastName="Ion";
var firstName="Maria";
var fullName= lastName+firstName;
var age= 19;
var drivingLicense= true;
console.log(lastName, firstName, age);

if(drivingLicense= true){
    console.log("My name is " + firstName+  " and I have a driving license");
}else if(drivingLicense= false){
    console.log("My name is" + firstName+  "and I don't have a driving license");
}


// Exercises Operators: 1. Cresti varsta cu 1 si afisati noua varsta pe ecran;

age++; console.log(age);
// 2. Ridicati la puterea a treia varsta si afisati pe ecran noua valoare
age= age**2; 
console.log(age);
// 3. modificati if else si adaugati si verificare varstei. Daca este mai mare de 100, 
//atunci printati catre ecran : "Desi Marius Monea are carnet de condus, datorita varstei 
//inaintate, de XXX ani, el nu ar trebui sa mai conduca.";
if(age<100){
    console.log("Are voie sa conduca");
}else if(age>100){
    console.log("este mult prea batran sa mai conduca")
}
// 4. Explicati de ce 2+2*4 este egal cu 10 si nu cu 16 (doar oral)
// 10:49
// 5. Verificati dc "1" + 1 este egal cu 1+1; explicati de ce
var hrf= "1"+1;
console.log(hrf);
// 6. Se da un numari cuprins intre 1 si 100. Sa se verifice cu if daca se imparte exact la 3, 
//apoi dc se imparte exact la 5, apoi daca se imparte la 15.

// 7. Daca numarul acesta este divizibil cu 15 trebuie sa printati catre ecran : "Divizibil cu 15"; dc este divizibil cu 3 ... "divizibil cu 3", dc este divizibl cu 5 ... "divizibil cu 5"; pentru numarele 15,30,45,60,75, 90 ... ar trebui sa apara doar ca sunt divizibile cu 15, nu si cu 3 si 5, pentru ca se subintelege

// 7 - avansat

// 8 - afisati restul impartirii numarului la 3 si puneti un mesaj de genul " 7 nu se imparte exact la 3 si are rest 1


















































