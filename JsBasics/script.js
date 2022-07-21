/*
alert('Hello World')
document.writeln('Hello World')
console.log('Hello Hello')
*/

/*---------------------------------         naming rules for valuables        -----------------------  


1. We can use letters, underscores, dollar sign at the beggining of the name
2. numbers can be used but not at the beggining
3. avoid keywords reserved (ex.function) or words that will probably be used in the future(ex.script)
4. JavaScript is a case sensitive language so a≠A 
*/


// var a=20;
// document.writeln(20);

// var price1=1;
// document.writeln('1price')

// var _job="programmer";
// document.writeln(_job);

// var $job="developer";
// document.writeln($job);

// var script="sda";

// var function= 2234
// document.writeln(function);

/*---------------------------------         Math operators       -----------------------  

1. operator: 
*/
// var x=71;
// var y=9;
// var sum=x+y;
// // 2-operator;
// var diff=x-y;
// console.log(diff);

// //*multiplicator operator:*

// var prod=x*y;
// console.log(prod);

// //* operator

// var division=x/y;
// console.log(division);



// //* % division reminder or modules operator

// var n=7;
// var m=2;
// var rest=n%2
// console.log(rest);

// //* short-hand operators

// console.log('valoarea initiala pentru n este ', n)

// //n=n+1;
// n++

// console.log('valoarea lui n dupa ++ este ', n)

// n--;
// console.log('valoarea lui n dupa -- este ', n)
// ;

// m=m+3

// console.log('m+=23 inseamna aduna 23 la valoarea initiala a lui m')
// console.log("----------------------------------------------");

// function displayName(myName1, myName2){
//     this.myName1=myName1;
//     this.myName2=myName2;

//     this.getName= function(){
//         // return this.myName1 + " " + this.myName2;
//         console.log(`e bine sa fii calm cand faci debugging, ${this.myName1}`)
//     }

// }
// var user001= new displayName("Maria", "Ion")
// console.log(user001.getName())


// for(var i=1; i<=100; i++){
//     console.log(i);
// }








console.log("-You re not your code!-");

// function User(firstName,lastName, age, hasDrivingLicense, isMarried, adress){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
//     this.hasDrivingLicense=true;
//     this.isMarried=false;
//     this.adress=adress;

//     this.method=function(){
//         if(age==19 && hasDrivingLicense=true && isMarried=false){
//             console.log()
//         }
//     }
// }

// var user001= new User("Maria", "Ion", 19, true, false, "Tantava, Giurgiu" )
// console.log(user001)



// const c= (k,l) => k+l;
// console.log(c(2,3))



// const mary = (b, c) => {
//     console.log("works");
//     return b + c;
// };

// console.log(mary(2,3));

 

//*-------------------------------

// const myFunction= function(myCounter){
//   let x= prompt("Please introduce a number.");
//   x= Number (x);
//   let sum= myCounter+x;
//   console.log(typeof sum);  
//   function add(){
//      let y= 10;
//     sum= sum+y; 

//      function add2(){
//         let v= Number ("11");
//         sum= sum+ v;
//      }
//    add2();
//   }
// add();
//   function print(){
//     console.log(`The parameter for my function is ${myCounter} `);
//     console.log(sum);
//   }
//   print();
// }
// myFunction(3);


// const myArray = [12,34, 56, 34, 12];
// var myArray2=[];
// for (var i= 0; i< myArray.length; i++){
//     console.log(`prmiul for`)
// }
//     for(var j= i+1; j< myArray.length; j++){
//         console.log(`al doilea for`);
//         console.log(``)
//     }





// student 1 with the following properties : exam1: 10, exam 2: 9.50, exam 3: 8

//  student2 with the following properties: exam1: 0, exam2: 5, exam3: 9.50

// student3 with the following properties: exam1: 10, exam2: 4; exam3: 8;

// *Create an algorithm that will get return all the markes from the 
//*exams taken by all the students with no duplicates





// ];
//- ar trebui sa fac 2 obiect. primul e const stud, al doilea, const exam
//- in exam o sa fac un array de obiecte si o sa pun index of(student1)
//- exam1 ar fi pozitia 0
//exam2- pozitia 1 si exam3= pozitia 2 
// daca am numere care se repeta sa fac myset.delete
// var studentmarkes=[];
// const students =[
//     { 'student1':[10, 9.50, 8]},
//     { 'student2':[0,5,9.50]},
//     { 'student3':[10, 4, 8]} 
    
// ]
// console.log(students);


// const myset= new Set();


// myset.add(students[0]);
// myset.add(students[1]);
// myset.add(students[2]);


// const student1= {
//     exam1: 10,
//     examen2: 0,
//     examen3: 10, 
// }

// const student2= {
//     exam1: 0,
//     examen2: 5,
//     examen3: 9.50, 
// }

// const student3= {
//     exam1: 10,
//     examen2: 4,
//     examen3: 8, 
// }





// const students = [
//     { 'exam1':[10, 0, 10],
//       'exam2':[9.50,5,4],
//       'exam3':[8, 9.50, 8],
//     }











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



//^-----------Maps-----------

// const map1 =new Map();

// map1.set('', 2);
// map1.set('Popescu', 7);
// map1.set('Marin', 9);

// console.log(map1.get(`Popescu`));

// map1.delete('Marin');
// console.log


//*You are given the following invented word: "Andaskrwefbsndbcqweeznxkzjhggdwjehebdpqiewhdcb".
//*How many characters there are in this invented word?

var longString= "Andaskrwefbsndbcqweeznxkzjhggdwjehebdpqiewhdcb";
console.log(longString.length);
var longString2=longString.split('');
console.log(longString2)
console.log(longString)
//* Which is the middle character?
console.log(longString.length/2);
console.log(longString.indexOf("w"));

// map1.set('A',1 );
// map1.set('n',2 );
// map1.set('d',3);
// map1.set('a',4 );
// map1.set('s',5 );
// map1.set('k', );
// map1.set('r', );
// map1.set('w', );
// map1.set('e', );
// map1.set('f', );
// map1.set('b', );
// map1.set('s', );
// map1.set('n', );
// map1.set('d', );
// map1.set('b', );
// map1.set('c', );
// map1.set('q', );
// map1.set('w', );
// map1.set('e', );
// map1.set('e', );
// map1.set('z', );
// map1.set('n', );
// map1.set('x', );
// map1.set('k', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );
// map1.set('', );

any=[];
var longString2= ["A","n","d","a","s","k","r","w","e","f","b","s","n","d","b","c","q","w","e","e","z","n","x","k","z","j","h","g","g","d","w","j","e","h","e","b","d","p","q","i","e","w","h","d","c","b"];
//*Switch letters d with w and b with n
//*Calculate which letter repeats itself the most
//*Ilustrate in a map, the frequency of each letter
//*





// As ptea sa folosesc add si sa
