//Creati 2 obiecte care sa aiba urmatoarele proprietati: varsta si nume.
let user1= {
    age:19,
    name:"Maria Ion",
    
};

let user2= {
    age: 37,
    name: "Andrada Voinea",
    
};
console.log(user1 , user2);

//*regula: ex(maria ion->mI)
//*obj.Name = Octavian Vasilache => oV


//Creati o functie care sa creeze pentru fiecare obiect o noua proprietate numite login care sa contina prima litera din fiecare cuvant de la proprietatea nume, folosind notatia lowerCamelCase
//2
var arrayUsers =[user1,user2];
    function getFirstLetters(arr) {
        const finalArray= [];
        arr.forEach(element => {
            
           let [firstWord, secondWord]= element.name.split(' ').map(word => word[0]).join('');
        //    finalArray.push(firstLetters[0].toLowerCase()+firstLetters[1].toUpperCase());
            console.log(`${firstWord.toLowerCase()}${secondWord.toUpperCase()}`);
        });
        console.log(finalArray);

    }
    

// for(var i=0; i<arrayUsers.length; i++){
//     console.log(getFirstLetters(arrayUsers[i].name));
// }

console.log(getFirstLetters(arrayUsers));



//1 incercare esuata
// function addLogin(user){
//     console.log(`My name is ${user.name}.`)
//     console.log(user.name.split(' '));
//     let firstLetter1= user.name[0].toLowerCase();
//     let firstLetter2= user.name[1].toUpperCase();
//     console.log(firstLetter1, firstLetter2);
//     let toString= user.name.toString();
//     console.log(toString);
    
// };
// addLogin(user1);


//*Creati un text area in care sa introduceti manual cate un username pe fiecare rand. 
//*Puteti sa puneti spatii la inceput de rand si dupa rand


var x = document.createElement("textarea");
document.body.append(x);
var button = document.createElement('BUTTON');
document.body.append(button);
console.log(x);
console.log("hei");

//changes made for git practice




let user3= {
    age:19,
    name:"sarah",
};

let user4= {
    age: 37,
    name: "kansou", 
};
console.log(user3 , user4);










// console.log(arrayUsers[0]);
// console.log(arrayUsers[1]);
// const newArray= arrayUsers.map(el=> console.log(el));



// arrayUsers [user1][user2];

// var matrix= [1, 2, 3 , 4,["a", "b"], 5 ];
// console.log(matrix[4] [1]);

// firstLetter1

// person.name = function () {
//   return this. + " " + this.lastName;
// };









