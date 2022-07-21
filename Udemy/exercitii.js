




//*------------------------Arrays-------------------------------*
console.log("ARRAYS")
const friend1= 'Mihiai';
const friend2= 'Constantin';
const friend3= 'Peter';

const friends = ['Mihiai','Constantin','Peter'];
//mihai= position 0, constantin 1, peter 2

const y = new Array(1991, 1984, 1978, 1966);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);
//extrage ultimul element din array
friends[2]='Jay';
//replace an element of an array
console.log(friends);

 const firstname= 'Mary';
const mary = [firstname,'student', 2022-2003, 'Ion', friends];
console.log(mary);
console.log(mary.length);

//*exercise

const calcAge = function (birthYear){
    return 2037- birthYear;
}
const years = [1990,2022,1900,2018,2020]
const age1= calcAge(years[0]);

console.log(age1);
const ages= [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3])];
console.log(ages)


//*------------------------Arrays Operations-----------------------------*


const girls = ['Maria', 'Ana', 'Claudia'];
console.log(girls);
//*PUSH
//add new elements with push(at the end of the array)
const newLen = girls.push('Denisa');
console.log(girls);
console.log(newLen);
//*UNSHIFT
//add new elements with unshift(at the beggining of the array)
girls.unshift('Larisa');
console.log(girls);
//*SHIFT 
//remove the element that was added with unshift
girls.shift();
console.log(girls);
//*POP
//remove elements with pop(it will remove the last element)
girls.pop();
girls.pop();
console.log(girls)
//*INDEXOF
//indexOf checks the position of an elements in the array
console.log(girls.indexOf('Maria'));
console.log(girls.indexOf('Bob'));
//*INCLUDES
//includes check if the element we are looking for exists in the array(TRUE/FALSE)
//*it is tested with strict equality ===
console.log(girls.includes('Maria'));
console.log(girls.includes('Bob'));

//conditionals with includes

if(girls.includes('Maria')){
    console.log("you have a friend called Maria");
}

console.log("---------------------");


//*------------------------Switch statements-----------------------------*

console.log("SWITCH STATEMENTS");

const day= 'monday';
switch(day){
    case'monday': //day==='monday'
        console.log('plan course structure');
        console.log('go to coding meet up'); 
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case'thursday' :
        console.log('Write code examples')
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!')
}

if(day==='monday'){
    console.log('plan course structure');
    console.log('go to coding meet up'); 
}else if(day==='tuesday' || day==='wednesday'){
    console.log('Write code examples')
}else if(day=== 'friday'){
    console.log('record videos')
}
console.log("---------------------");

//*------------------------Ternary Operator-----------------------------*


const ag= 23;
// ag >= 18 ? console.log('I like to drink wine'):
// console.log('I like to drink water');

const drink = ag >= 18 ? 'wine' : ' water ';
console.log(drink);




