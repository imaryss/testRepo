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
for(var j=0; j<percentages.length; j++){
    if(percentages[j]===population1[j]){
        console.log("da, sunt egale")
    }else{
        console.log("nu, nu sunt egale")
    }
}

