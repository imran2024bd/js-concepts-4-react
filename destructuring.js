// 37-4 Array And Object Destructuring 

// 1. array destructuring
const numbers = [42, 65];

// const x = 42;
// const y = 65;

// const [x , y] = [78 , 90];
const [x , y] = numbers ;
// console.log(x , y);

function boxify(num1 , num2) {
    const nums = [num1 , num2];
    return nums;
}
// console.log(boxify(3 , 5));

// const [first , second]= [90 , 34];
const [first , second]= boxify(50 , 65);

// console.log(first , second);


const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// const [firstMovie , secondMovie] = student.movies;
// console.log(firstMovie ,",", secondMovie);

// const {name , age} = student;
// console.log(name ,",", age);

// object destructuring

// const{name, age} = { name: 'alu',age: 14};
const {name, age} = { id : 12 ,name: 'alu', salary: 3400 ,age: 14};
console.log(name , age);



const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water', 
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}
// 01 
const {ide , machine} = employee;
console.log(ide , machine);
// 02
const {height, address} = employee.specification;
console.log(height , address);
// 03
const {brand , price} = employee.specification.watch;
console.log( brand , price);


// If there is no specification then we use optional chaining question Mark ( ? )

// const {brand , price} = employee?.specification?.watch;
