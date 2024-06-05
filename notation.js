
// 37-8 Dot Vs Bracket Notation


const person = {
    name: 'Lal Nil Holud mia',
    profession: 'Traffic Surgeon', 
    age: 39,
    25: 'Summer',
    'son-name': 'Sunny',
    address: 'Shahabag'
}

// Dot notation

const prof1 = person.profession;
// console.log(prof1);

const age1 = person.age ;
// console.log(age1);

const nameP = person.name ;
// console.log(nameP);


// Bracket Notation

const prof2 = person['profession'];
// console.log(prof2);

const pName ='profession';
const prof3 = person [pName];
// console.log(prof3);

const Summer = person[25];
console.log(Summer);

const sonName = person["son-name"];
console.log(sonName);


// Use [] , 
// Object Property Name within string