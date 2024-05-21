const numbers = [89, 35 , 12, 98];
const student = {
    name: 'sakib khan',
    age: 32,
    movies:['king khan', 'Dhakar Mastan', 'Aupu my Love']
}

// 1. Template string
// `` = Back tick

const about = ` My Name is ${student.name} now age of ${student.age} after Three years will be ${numbers[1]} also liked movies ${student.movies[2]} and my exam score is ${numbers[3]} `;

// console.log(about);


// 2. arrow function

const getFiftyFive = () => 55 ;
// console.log(getFiftyFive);

const addSixtyFive = num => num + 65 ;
const isEven = x => x % 2 == 0;
const addThree = (x , y , z) => x + y + z ;