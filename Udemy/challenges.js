//*-------Coding challenges-------
console.log("CODING CHALLANGE")
//*#1
var markMass=78;
var markHeight= 1.69;
var johnMass=92;
var johnHeight=1.95;

var bmiMark= markMass/ markHeight**2;
console.log(bmiMark);

var bmiJohn= johnMass/ johnHeight**2;
console.log(bmiJohn);
//*#2

if(bmiMark>bmiJohn){
    console.log('BMI Mark is greater than John s BMI')
}else if(bmiMark<bmiJohn){
    console.log('BMI Mark is smaller than John s BM')
}

console.log("---------------------");
//*HTML
//?(1)
//Creati o pagina noua html, cu denumirea in tab-ul ferestreti de browser de Ex1
//Puneti Textul de Seasons pe prima linie de pe ecran
//Puneti 4 cuvinte pe acelasi rand : Spring, Summer, Autumn si Winter
//Spring trebuie sa fie cu bold, Summer subliniat, Autumn italic si Winter bold, italic si subliniat
//Culoare distincta pe fiecare anotimp in parte
//Make each word to be clickable and when clicked a new tab should be opened to a picture of the seasons
//?(2)
//Using Windows+. open the emoji window and pick you favorite emoji
//Using HTML special characters put on the screen 1 emoji on the first row, on the second row
//two emojis, on the thirs tree emojis ..... until the seventh with seven emoji
//Make sure that all the emoji are aligned to the right
//?(3)

//Create a new folder called HomeworkHTML with an index.html file
//Inside the folder HomeworkHTML create another folder called img where you will store all the images for this homework
//Put the title "HomeworkIsFun" for your html file ... it should appear in the tab of the browser
// Learn from googling how you can put a small image on the left of the title of the tab, just like in the case of Slack or a tab from the Academy with the slides (it is a very small image there)
//Create 3 paragraphs. Put them all inside a div element
// The first two paragraphs should have the text inside (use blind text generator for the content of the paragraphs) of color red
//Make the first word of every paragraph bold, italic and underlined
//Make the last work of each paragraph a link
//Open the first link in a new tab in the browser, the other links should open in the same tab
// Color the links in different colors
//Create an unordered list with items. Each should be a different heading from 1 to 6, in different colors
//Create an ordered list about the Marvel Movies. Make each item contain a wallpaper of the movie and the title of the move (try to find a very small image so it would fit on the same row as the title)
//Create a table with favorite countries in the world. You should have information in the table about : capital, population, surface, languages. It is up to you to create the design for the table
//Create a rhomboid shape with emojis while using HTML special characters
//Create a new html file. This file will contain only one picture. When you click on it, the picture will be replaced with another picture. How do you do it?
//All the items with asterisc are more difficult - do not stress if you can't solve them easily

//?(4)
// Create a new project folder. Inside create an HTML file. For the title 
// of the page put the name “Personal Blog”
// On the first line put your name using a heading. Put the color green.
// Under your title, using the smallest heading put with blue, your date of birth.
// Below that put some blank space. Which tag should you use for that?
// Add the following information : address: XXXXX , 
// on the next row: job: xxxxxx ; replace the xxxx with actual information
// Make bold job and address words. Put italics for the content that replaced xxxxx
// Insert an image of your favorite place. Write below a description. Put underline 
// and the color yellow for the first word.
// Nest the image inside a link. When clicked you should 
// navigate to another html file with all the snapshots from Slack and 
// with your personal description under each image that will describe the topic covered in each picture.



//*CSS
//?(1)
//Create a form with:
//2 textfields with default values
//1 textarea with default value for feedback for the product
//3 radio buttons for favorite meal
// email input with any kind of property that you know
//color input with default value .... yellow
//3 checkboxes
//submit button
//?(2)
//Create 3 divs, each with 4 paragraphs each
//	Inside the first paragraph for each div you will have at least 2 links and 1 span
// Put the same class for the first and third paragraph, and another class for the second and fourth paragraph and style them with background-colors : chooses nuances of light grey
//  Both classes should have the following set of rules : triple the size of the text inside and same font family
// Target the span inside the second and forth paragraph only and add some tet decoration properties, and make the letter all uppercase
// Create a span outside the paragraphs, but still inside the divs. If you want to put a background-color property only for the spans inside the div, but outside the paragraphs ... how do you do it? Forbidden the usage of classes or ids
// Put an image. When you stay with your mouse over the image - it should gain : border, margin and padding; try to put margin, border and padding only on bottom;
//
//?(3)
//Create 10 divs with text inside . Each will contain numbers inside . They go from 1 to 10
// The text should be white, font increased a few times
// each should have a distinct background-color. Put classes box and box-1, box-2, box3 for each
// div according to which text is inside each div
//
//
//?(4)
//1. Create a blog website with 5 articles. Use blind text to fill the content and use 
// Numbers from 1 to 5 to make sure we know which is the initial order. Put a very soft but distinct
//  background color to each article
// 2. Implement all the principles of flex-box discussed until now
//
//?(5)
//Exercise grid: Simulate a chess board with 2 colors for backgrounds

// 2. You should have an empty row between the two sets of pieces
// 3 - advanced - put images of the chess pieces on the rows
// keep the numbers like A1, A2, K9, K10
// Simulate the movement of 2 pieces: queen or tower
// rook
// mutat o piesa rook ... in fata sau spate, sau lateral
// fara diagonala
// regina si in fata- spate, stg-dreapta si diagonal
// regina - mutati diagonala
// empty row between players is optional
//
//?(6)
//Create a list of 10 flags. Each flag should be represented by a an image. 
//When you make hover on a button
//Show ... a square rectangle should appear with a description of the country
//2. Personal Blog. Create your own description page with your image and your data. 
//Organize everything nice in your page. Use headings, nice fonts. Use a background image for some sections. 
//Example: an image of computer science ... code ... on the background of a section where you describe
//everything you know now about HTML, CSS, Javascript. Be as descriptive as possible. 
//Use special characters whenever possible. Put an image of your favorite movie/book which should grow 
//in size when hover. If you click it it should go to imdb/wiki of that book.
//3. Create a stack of photos. Select 4 nice nature photos and stack them on top of each other so that all the time you can see the image on top and pieces of the other images. Just like when you throw them on the table. You see the picture on top and fragments of the others below. When you hover an image below it should be visible entirely and be on top
//4. Create a table and color the rows while using only pseudoclasses.

//?(7)
// Homework: Bootstrap: breadcrumbs, accordion, cards - create a small project that implements these templates

//*JS
//Exercise* : marius.monea89@gmail.com
//?(1)
//You are given this string
// please create an algorithm that will parse the string and separate the first name and the last name into variables
// also .... the extension should be in a variable as well
// in the end you should have something like marius, monea89 si gmail in separate variables
var gmail = "marius.monea89@gmail.com";
var name1 = gmail.split('@');
var name2 = name1[0].split('.');
console.log(name2);
console.log(name2[0]);
console.log(name2[1]);
console.log(name1[1]);
console.log(name1);
console.log(gmail.split('@'));
console.log(gmail);
//?(2)
//Exercise if else : create a variable dayOfTheWeek. Put a string value inside; 
//check with if else what is the day of the week and put  a different message for each day
var dayOfTheWeek = "";
switch(dayOfTheWeek){
    case 'Luni':
    console.log("luni");
    break;
    case 'Marti':
    console.log("marti");
    break;
    case  'Miercuri':
    console.log("miercuri");
    break;
    case  'Joi':
    console.log("joi");
    break;
    case  "Vineri":
    console.log("vineri");
    break;
    default:
    console.log("e weekend");
}



//?(3)
// Print to the console the text "The movie starts with 'A' and the budget is above 0" 
// if the first letter of a is "A" and the b(budget) is positive

// You have two variables with strings inside. 
// Check which one has more characters and print a message to the console 
// like ("Variable a has more characters and it has X chars");

// You are given the string "AAABBABABABABBBBAAA"; 
// print to the console how many characters "A" and how many 
// characters "B" you have inside
//varianta Claudiu
// var contor1 =0;
// contor2= 0;
// const string = "AAABBABABABABBBBAAA";
// for(var i=0; i<string.length; i++){
//     if( string[i]==="A"){
//         console.log(contor1++);
//     }else if(string[i]=== "B"){
//         console.log(contor2++);
//     }
//     console.log(string[0]);

// }

//Varianta Andrada
//match
//let text = "The rain in SPAIN stays mainly in the plain";
//text.match("ain");
const letters = "AAABBABABABABBBBAAA";

var numbersOfA= (letters.match(/A/g)).length;
var numbersOfB= (letters.match(/B/g)).length;
console.log(numbersOfA, numbersOfB );
console.log(numbersOfB);
//console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3

//console.log(("str1,str2,str3,str4".match(new RegExp("str", "g")) || []).length); //logs 4

//?(4)
//Exercises: 1. Se o variabila x. Aceasta ia valoarea numelui vostru de familie. Printati in consola.
//  Adaugati o a doua variabila care sa contina prenumele. Printati in consola
// Creati o a treia variabila care sa contina numele vostru comple, folosing primele 2 variabile
// A patra variabila este legata de varsta voastra. La fel, printati catre ecran
// A cincea variabila este de tip boolean si va contine dc aveti sau nu carnet de conducere
//  Printati pe ecran un mesaj care sa contina numele vostru intreg, varsta si valoarea variabilei boolean
// Folosing if statement printati pe ecran un mesaj diferit pentru fiecare valoare posibila a variabilei boolean
// ex: "NUmele meu este Marius Monea, am 32 de ani si NU conduc masini, pentru ca nu am carnet de conducere"
// la mine asta e cazul, la restul poate sa fie conduc masini, pentru ca am carnet de conducere
//
//?(5)
//Exercises Operators: 1. Cresti varsta cu 1 si afisati noua varsta pe ecran;
// 2. Ridicati la puterea a treia varsta si afisati pe ecran noua valoare
// 3. modificati if else si adaugati si verificare varstei. Daca este mai mare de 100, atunci printati catre ecran : 
// "Desi Marius Monea are carnet de condus, datorita varstei inaintate, de XXX ani, el nu ar trebui sa mai conduca.";
// 4. Explicati de ce 2+2*4 este egal cu 10 si nu cu 16 (doar oral)
// 5. Verificati dc "1" + 1 este egal cu 1+1; explicati de ce
// 6. Se da un numari cuprins intre 1 si 100. Sa se verifice cu if daca se imparte exact la 3, 
// apoi dc se imparte exact la 5, apoi daca se imparte la 15.
// 7. Daca numarul acesta este divizibil cu 15 trebuie sa printati catre ecran : 
// "Divizibil cu 15"; dc este divizibil cu 3 ... "divizibil cu 3", dc este divizibl cu 5 ... "divizibil cu 5"; 
// pentru numarele 15,30,45,60,75, 90 ... 
// ar trebui sa apara doar ca sunt divizibile cu 15, nu si cu 3 si 5, pentru ca se subintelege
// 7 - avansat
// 8 - afisati restul impartirii numarului la 3 si puneti un mesaj de genul " 7 nu se imparte exact la 3 si are rest 1
//
//
//?(6)
//Se sa creeze o functie care sa accepte 2 argumente, 
// prenumele si numele vostru. Functia trebuie sa returneze numele vostry intreg
// 2. Realizati o functie care sa accepte un string ca argument si sa returneze cate caractere contine stringul respectiv
// 3. Se da o lista de numere [3,6,4,7,9,10,12]; creati o functie care sa returneze daca un numar este divizibl cu 3
// 4. printati pe ecran cate numere sunt divizibile cu 3 din lista de numere de la punctul 3

//
//
//?(7)
//5. creati urmatoarea serie de variabile: firstName, lastName, age, hasDrivingLicense, isMarried, address. 
// Puneti valorile corespunzatoare: string, numar sau boolean. 
// Realizati o functie care sa printeze pe ecran urmatorul mesaj 
// (Numele meu este Marius Monea, am 32 de ani, cu inca X ani pana la pensie[la pensie se iese la 65 sa zicem], 
// cu domicilul in Bucuresti, str Inorogului Zglobiu Nr4 , 
// sunt casatorit si nu conduc masina); folositi if pt a avea mesajul corect

//
//?(8)
//Ex1. Creati o functie care verifica daca un caracter este sau nu o vocala(a,e,i,o,u);
//Ex2: Creati o functie care sa numere vocalele dintr-un cuvant
//Ex3 Creati o functie care accepta 2 numere intregi ca parametri. 
//Va returna numarul care se termina cu cea mai mica cifra dintre cele 2. 
//ex: 71 si 34 -> va returna 71.
//Ex 4 - creati o functie care sa returneze suma cifrelor unui numar
//
//?(9)
// 1.Se se printeze in consola de la 20 la 1
// 2. Sa se printeze in consola doar numerele divizibile cu 3 de la 3 la 99
// 3. Sa se printeze pe ecran numerele de la 1 la 100 care au ultima cifra 2 sau 3
// 4. Sa se printeze numerele divizibile cu 5 de la 1 la 100
//
//
//?(10)
//5. Creati o variabila care sa stocheze un string. 
//Folosing un for loop returnati stringul inversat. 
// Puneti logica intr-o functie, care sa accepte un string 
// si sa returneze stringul scris de la coada la cap
//
//
//?(11)
//Exercitiu avansat: Cand merge la sala facem ... sa zicem 4 exercitii a cate 20 de repetari fiecare. 
// Folositi for loop pentru a printa pe ecran .... cu emoji funny langa .... 
// Exercitiul 1 - repetitia 1:thumbsup: ... Exercitiul 1 - repetitia 2
//  si tot asa ... nush ... cautati un emoji mai fain pentru haltere ... 
//  deci ar trebui sa am 80 de randuri printate, da?
//
//?(12)
//Exercises : While

// Se da un string; folositi while loop ca sa printati jumatate din lungimea sa
// 2. Cu while loop printati pe cate un rand o piramida de emoji, incepand de la 1 emoji pe rand pana la 10 emoji pe rand
// 3. se da  o variabila string care contine multe vocale. Sa se printeze caracterele din acest string pana cand intalnim 
// a treia vocala. Cand intalnim a treia vocala, aceasta va fi ultimul caracter printat;

// Exercises do while :
// Folositi do while pentru a printa numerele de la 15 la 5;
// Exercises break and continue
// Se da un string. Sa de printeze caracter cu caracter in afara de vocale; folositi break or continue
// 2. Sa se printeze numerele de la 1 la 100; intrerupeti loopul cand intalniti un numar divizibl cu 14 si cu 3;
// Exercises arrays
// Se dau 2 arrayuri cu numere. Verificati care array este mai lung si printati un mesaj pentru orice posibilitate
// 2. Verificati suma tuturor numerelor din arrays si printati cine are suma elementelor mai mare
// 3. Pentru fiecare al treilea element din array-uri - inlocuiti elementul cu opusul lui;
// ex : 5 va fi -5 si -8 va fi 8;
// 4. Printati elementele unui array cu for of
// 5. Printati index-urile unui array cu for in
//
//?(13)
//Create a function that returns the average score of 3 numbers
// 2. Create a function that returns true if the parameter passed is divisable by 2 and 3 and false if it not
// 3. Create a function that accepts 2 numbers(x and y) between 1 and 10. It will output a message like: 
// "Welcome to the olympics. Today we will have a lap around the stadium. We will have X rounds 
// consisting of Y challenges. Let the Games Begin! ". After that we will have the following series of messages:
// Round 1 - Challenge 1 ... Round 2 - Challenge 2 .... .... Round 4 ... Challenge 7.
// 4. Calculate the sum of elements of an array.
// 5. Create a function that reduces each element of an array to half. Test it out. How do you write it?
//
//?(14)
//Exercise: Create a function constructor for cars.
//  Each object car should have a brand, a year, a price, a normal speed. 
//  These 4 should also be arguments for the functions. 
//  Each object has also the following properties : isEcologic with the default value false, 
//  the methods : accelarate(increase speed by 10%), brake(decrease speed by 20) . 
//  Create 3 distinct car objects. Mimic a car reaching to 200km/h. 
// What do you have to do? Output messages in the console to prove you finished the task.
//Exercises - advanced : 1. if an object should push 10 brakes in its time, a new property should 
//be created on the object : wheelsUsed with a boolean value. How do you do that?
//Nu neaparat una dupa alta
//
//2. Put a method on the object called crush that does the following : 
//a. reduced the speed to 10% of it's initial value b. 
//reduces the price to 35%  c. creates the wheelsUsed property and makes it equal to true
//
//?(5)
// 1. Create 2 types of objects with both ECMASCRIPT2015(ECMA6) syntax and with the 
//old version(function constructor). Topic : dinosaurs; list of arguments: size, specie, isHerbivorous
// Default properties : isExtinct : true; methods: eat - this should act differently if the dinosaur 
// is herbivorous or carnivorous. For herbivorous you should create a new property for the dinosaur 
// object called stomach. It will contain the word grass as a value
// For extra credit ask the user to input 3 strings. For example - when you call eat for 
// herbivorous dinosaurs - the use will input 3 times a name of a plant the dinosaur 
// could eat : fern, acorn, grass, pine needle etc
// For carnivorous - the size should increase with 15%
// Make the name property hidden or private


// ECMA6
function dinosaurs(size, specie, isHerbivorous){
    this.isExtinct = true;
    this.size=size;
    this.isHerbivorous= isHerbivorous;
    let _specieSecret= specie;
    this.eat= function(){
        if(this.isHerbivorous){
            // const promptHerb1= prompt("The eaten plant is");
            // const promptHerb2= prompt("The eaten plant is");
            // const promptHerb3= prompt("The eaten plant is");
            this.stomach= "grass";
            console.log("is herbivorous");
            
        }else{
            this.size+= this.size*0.15; 
            console.log("is carnivorous");
            console.log(`The size of the dinosaur has increased to ${this.size}`)
        }
    }
}
const dino1= new dinosaurs(20, "specie", true);
console.log(dino1);
dino1.eat();
console.log(dino1.size);

class dinosaurs2{
    constructor(size, specie, isHerbivorous){
        this.size=size;
        this.isExtinct = true;
        this.isHerbivorous= isHerbivorous;
        
        let _specieSecret1= specie;
        this.eat= function(){
            if(this.isHerbivorous){
                this.stomach= "grass";
                console.log("is herbivorous")
            }else{
                this.size+= this.size*0.15; 
                console.log("is carnivorous");
                console.log(`The size of the dinosaur has increased to ${this.size}`);
                
            }
            
            
        }
        //how to show a hidden property
        this.getSpecie= function(){
            return _specieSecret1;
            
        }
        this.setSpecie= function(value){
            _specieSecret1= value;
        }    
    }
}

const dinoConstr= new dinosaurs2(20, "T-Rex", true);
console.log(dinoConstr);
dinoConstr.eat();
console.log(dinoConstr._specieSecret1);
dinoConstr.getSpecie();
console.log(dinoConstr.getSpecie());
dinoConstr.setSpecie("triceratops");
console.log(dinoConstr.getSpecie());

// Create a function outside the object that will receive as input 2 dinosaurs. 
// Call it encounter. If one of the dinosaurs is carnivorous and the other is herbivorous, 
// do the following : the herbivorous dinosaur should change its name from lets day tryceratops
// into ex-triceratops and the carnivorous one should "eat" it. Also ... you should print to the 
// console the following text : The herbivorous dinosaur dino1, called (tryceratops - the name of the dino) 
// met a carnivorous one, called T-Rex. Now the tryceratops is no more and its name is ex-tryceratops. 
// The T-Rex increased in size it has .... new size of the carnivorous one
// *specie = name
// Creative part : 
//what should encounter do if the 2 dinosaurs are herbivorous or both carnivorous

function encounter(dino1, dino2){
    if(dino1.isHerbivorous && !dino2.isHerbivorous){   
        dino1.setSpecie("ex-" + dino1.getSpecie());
        dino2.eat();
    }else if(!dino1.isHerbivorous && dino2.isHerbivorous){
        dino2.setSpecie("ex-"+ dino2.getSpecie());
        dino1.eat();
    }else if(dino1.isHerbivorous && dino2.isHerbivorous ){
        console.log("They ignore each other")
    }else{
        console.log("both are carnivorous")
    }
}
const anotherdino1= new dinosaurs2(20, "t.rex", false);
const anotherdino2= new dinosaurs2(40, "erbivor", false);
encounter(anotherdino2, anotherdino1);

console.log(anotherdino1.getSpecie(), anotherdino2.getSpecie());
console.log(anotherdino2.size);
//?(6)
//Homework: Theme: Shopping. Create a class for shopping. 
//Each object will have the following parameters : location, budget, items.
//Items will be an array. It could be empty or with elements(strings). 
//Besides the arguments passed to the constructor function, each shopping 
//should have the following properties: isFun : true and the method spend which 
//should accept a number that will decrease the budget of the object
class shopping{
    constructor(location, budget, items){
        this.isFun= true;
        this.location=location;
        this.budget=budget;
        this.items=items;
        
        this.spend= function(items){
            for(var shoppingItem in items){
                console.log(`${shoppingItem}: ${items[shoppingItem]}`);
                if(items[shoppingItem]> this.budget){
                    console.log("You can't spend what you do not have");
                }else{
                    this.budget -= items[shoppingItem];
                    console.log(`The budget has decreased to ${this.budget}`);
                }
            }
            
        }
        
        
        
    }
}

var shoppingList = {
    beer: 10, 
    milk: 2,
    scarf: 5,
    bread: 4
    
}

var object01= new shopping('Promenada', 500, []);
object01.spend(800);
console.log(object01.budget);

var object02= new shopping('Afi', 500, shoppingList);
object02.spend(shoppingList);
console.log(object02);
// }
// Advanced - use a control structure to check if the number passed to the function 
// is bigger than the current budget; if it is print to the console: 
// "You can't spend what you do not have";

// Use both constructor function (before ECMA6 and also classes from  ECMA6)
// 2. Advanced - the method spend should accept an object as an input not a number anymore; 
// this object should have a list of shopping items, like : beer - 10, milk -2, scarf -9, bread - 1, etc; 
// it represents the shopping list. after you pass the object to the function and call it later on - 
// a message on the screen should be like : Shopping Item 1 - beer - it costs 10, and it brings the budget 
// from 200 to 190; .... Shopping Item 7 - DVD - it costs 11, and it brings the budget from 50 to 39

// Create a trip class. This should have the location and budget as parameters. You should make the budget private. 
// Make sure you are still able to change it and to show it to the console, even if it is private now.

class trip{
     constructor(budget, location) {
        let _privateBudget= budget;
        this.location= location;
        this.getBudget= function(){
            return _privateBudget;
        }
        this.setBudget= function(modifiedBudget){
            _privateBudget=modifiedBudget;
        }

        
    }
}



var trip01= new trip(500, "Busteni")
var trip02 = new trip(400, "Retezat");
var trip03= new trip(600, "Vama Veche");
var tripArray =[trip01, trip02, trip03];

console.log(trip01.getBudget());
console.log(trip01.budget);
trip01.setBudget(800);
console.log(trip01.getBudget());
// Advanced - 
//create an external function that can compare 3 trips between themselves and
// see which trip is cheaper. 
// That trip will receive a new property called isCheapest and
// be initialized with true value.
function compareTrip(tripArray){
    isCheapest= true;
    var minimBudget= 10000;
    for(var i=0; i<tripArray.length; i++){
        console.log(tripArray[i].getBudget());
        if(tripArray[i].getBudget()< minimBudget){
            minimBudget= tripArray[i].getBudget();
        }
    } 
    console.log(`minimum Budget is ${minimBudget}`)
    
    for(var i=0; i<tripArray.length; i++){
        if(tripArray[i].getBudget() === minimBudget){
            tripArray[i].isCheapest = true;
        }
        
    }
    console.log(tripArray);
}
compareTrip(tripArray);
//*june 5th
// Budgettripr01<trip02<trip03
//Budgettrip02<trip03<trip01
//Budgettrip03<trip01<trip02



//Bank Account
// Create a bankAccount class(ES6 - with class keyword) and put the following properties: 
// balance, owner, startDate - this 3 should be also arguments
// 2. Each bankAccount should have also a transaction properties which 
//will stores incomes(salaries, bonuses etc) 
// and expenses(fees, penalties)

class bankAccount{
    constructor( balance, owner, startDate) {
        this.balance=balance;
        this.owner=owner;
        this.startDate=startDate;
        this.incomes=[];
        this.expenses=[];
    }
}

class bankAccountLoan extends bankAccount{
    constructor(balance, owner, startDate){
    
        
        super(balance, owner, startDate);
    
         this.k=0;
         
    }
    loan=function(amount){
            
            if(amount>10000){
                console.log("No loan");
            }else{
                this.balance+=amount;
                console.log(`${this.balance}`);
                this.k++;
            }
            
            if(this.k==3){
                bigLoaners.push(this.owner);
            }
    }
}


const bigLoaners = [];
console.log(bigLoaners);
var user001= new bankAccountLoan(800, "Ion Maria", "27/7");
user001.loan(5000);
user001.loan(4000);
user001.loan(7000);
console.log(user001.k)
console.log(bigLoaners);

// 3. Create a new class, a child class that will inherit from bankAccount. 
// This class should describe the objects that have a new method called loan. 
// This method should increase the balance with a certain amount. 
// Each call of the method will have different outcomes - 
//according to how much does the new type of account wants to loan
// 4. After you have written the definition of the two classes modify outside 
//its definition, add a new method to each of them. 
bankAccountLoan.prototype.outsideMethod = function () {
    this.cardNumber=Math.floor(Math.random() * 10000000000000000000);
};
user001.outsideMethod();
console.log(user001);
// Be creative with its outcome

// 5. create a function that will check if an object has available the loan property
function CheckLoanProperty(bankAccount){
    return bankAccount.hasOwnProperty('loan');
     
};
console.log(CheckLoanProperty(user001));
// 6. Create an array which will register the accounts that call 
//loan more than 3 times. Name it : bigLoaners.



// 7. Create a new class called hackerAccount which will overwrite the method 
//loan and when called it will deplete 
// the account that you want. If the account that will be affected by this 
//will be 0 or below 0 - 
// print a message to the console with some nice emojis in it. 
// The hackerAccount should have the balance increased and a new property 
//underInvestigation: true; 
// Instantiate the new hackerAccount class.



class hackerAccount extends bankAccountLoan{
    constructor(balance, owner, startDate){
    
        
        super(balance, owner, startDate);
    
         
         
    }
    loan=function(otherAccount){
        this.underInvestigation= true;
        this.balance+= otherAccount.balance;
        otherAccount.balance=0;

        console.log(`${otherAccount.owner}, your account has been depleted 😈🙈`);
    }

}

var depletedAccount= new hackerAccount(400, "Andrada", "28/7");
depletedAccount.loan(user001);
console.log(depletedAccount);
console.log(user001);


// Exercises OOP : 1. Create a Plant class. It will have the following default properties :
//  nutrition(autotrophic) & hasRoots = true. (don't throw stones of me when you think of 
//  parasitic plants like mistletoe) . Each plant object, when instantiated should have
//   a size, a name as arguments. Also ... the user should be asked about mainProduct. 
// The mainProduct introduced by the user should be stored in the object.

// 2. Create an array that will store all the main products of the object plants.
//3. Create a way to ensure that the array will have unique values
// 
class Plant{
    constructor(size, name){
        this.size=size;
        this.name=name;
        this.nutrition= "autotrophic";
        this.hasRoots= true;
        // this.mainProduct= prompt("Write the main product");
        
        // if(!arrayProducts.includes(this.mainProduct)){
        //     arrayProducts.push(this.mainProduct);
        // }
    }
    
}
let arrayProducts = [];
let plant001= new Plant(78, "trandafir");
let plant002= new Plant(77, "lalea");
let plant003= new Plant(76, "brad");

console.log(plant001, plant002, plant003);
console.log(arrayProducts);

//4. Create a child class called Angiospermae (yeah - I am a fan of Biology and Inheritance) 
// that will inherit from Plant. This will have a new property called climate that will be 
// an object which will contain 1 to 4 climate regions (tundra, steppes, desert, swamps, etc) 
// - each with more exact locations. For example wildPoppy will be found in steppes 
// (siberian steppes, argentinian pampas etc - > 
//     this could be just countries if you are not a fan of Biodiversity)

class Angiospermae extends Plant{
    constructor(size,name, climate){
        super(size, name)
        this.climate=climate;
    }
    
}

let climate1 = {
    tundra : ["North America", "North Asia"],
    steppes: ["Africa", "Australia"],
    desert: ["Africa", "Asia"],
    swamps: ["Florida", "Europe"]
}
let newPlant001= new Angiospermae(2, "rosie", climate1.steppes[1]);
let newPlant002= new Angiospermae(3, "castravete", climate1.tundra[0]);
let newPlant003= new Angiospermae(4, "banana", climate1.steppes[0]);
console.log(newPlant001);
console.log(newPlant002);
console.log(newPlant003);

//map

const num = [1, 2, 3];
num.map(v=> v*2);
console.log(v);



// If your country's population is greater than 33 million, 
// use the ternary operator to log a string like this to the console: 
// 'Portugal's population is above average'. Otherwise, simply log 
// 'Portugal's population is below average'. Notice how only one word 
// changes between these two sentences!


// let population = 40;

// population>33 ? console.log("Romania's population is above average") : console.log("Romania's population is below average")
// condition?(if)statement:(else)another statement

// After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original




// . Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D

// const language= "Chinese";
// switch(language){
//     case "Chinese" || "Mandarin": 
//     console.log('MOST number of native speakers!');
//     break;
//     case "Arabic": 
//     console.log('5th most spoken language')
//     break;
//     case "Spanish":
//     console.log('2nd place in number of native speakers');
//     break;
//     default: console.log('Great language too');
// }




// Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

let country = "Romania";
// let language = "english";
// let population= 30;
let isIsland= false;

// if(language === "english" && population <50 && !isIsland){
//     console.log(`${country} Is the right country for Sarah`);
// }else{
//     console.log(`${country} is not right for her`);
// }



function rightCountry(language, population, isIsland){
    if(language === "english" && population <50 && !isIsland){
    console.log(`${country} Is the right country for Sarah`);
}else{
    console.log(`${country} is not right for her`);
}
}
rightCountry("english", 30, false);


//* 
const anotherCountry = {
    name: "Sweden",
    language: "english",
    population: 20,
    isIsland: false
}

function betterCountry(object){
    if(object.language === "english" && object.population<50 && !object.isIsland){
        console.log(`${object.name} is the right country for Sarah`);
    }else{
        console.log(`${object.name} is not right for her`);
    }
}

betterCountry(anotherCountry);



// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'

const Romania= ["Serbia", "Moldova", "Ungaria", "Bulgaria", "Ucraina"];
console.log(Romania);
Romania.push("Utopia");
console.log(Romania);
Romania.pop();
console.log(Romania);

if(!Romania.includes("Germania")){
    console.log('Probably not a central European country :D');
};
// people[0] = "Georgie";-- how to change a value in an array
Romania[Romania.indexOf("Moldova")]= "Sweden";
// Romania.indexOf("Moldova")= "Sweden";
console.log(Romania);
console.log(Romania.indexOf("Moldova"));
'Moldova class="country">'




// The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)

function percentageOfWorld1(population){
    return (population/7900)*100
};
console.log(percentageOfWorld1(200));

// 1. Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'percentages' containing the percentages of the
// world population for these 4 population values. Use the function
// 'percentageOfWorld1' that you created earlier to compute the 4
// percentage values

const population =[19, 25, 60, 85];
console.log(population.length === 4);

const population1 = [
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[1]),
    percentageOfWorld1(population[0]),
    percentageOfWorld1(population[3]),
];


console.log(population1);
const percentages = [];
for(var i=0; i<population.length; i++){
    console.log(percentageOfWorld1(population[i]));
    percentages.push(percentageOfWorld1(population[i]));
    
};
console.log(percentages);


// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the
// percentages of the world population for the 4 population values. Use the
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the
// 'percentages' array that we created manually in the previous assignment,
// and reflect on how much better this solution is

//check if 2 arrays are equal
// for(var j=0; j<percentages.length; j++){
//     if(percentages[j]===population1[j]){
//         console.log("da, sunt egale")
//     }else{
//         console.log("nu, nu sunt egale")
//     }
// }








