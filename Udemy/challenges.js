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