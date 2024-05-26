// 37-5 JSON, Fetch, Keys, Values, Array Add Or Remove Using Dots


// 01 JSON  =>  stringify , parse
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// -----------------------------------------------------------
student.movies[0] = 'sakib khan';
const stMovies = student.movies[0];
// console.log(stMovies);


// -----------------------------------------------------------


// js object tr to JSON
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const stJSON = JSON.stringify(student);
// console.log(stJSON);
// -----------------------------------------------------------

// JSON to object
const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);
const stObj = JSON.parse(stJSON);
// console.log(stObj);

// -----------------------------------------------------------
// API stands for Application Programming Interface.
// 2. fetch
// fetch('url')
    // .then(res => res.json());
    // .then ( data => console.log(data));

// finding keys and values of an object
    // keys , values
    const keys =Object.keys(student);
    console.log(keys);
    const values = Object.values(student);
    console.log(values);

    // for
    const numbers = [23, 54 , 67 , 87 , 23 , 78];
    numbers.forEach(num => console.log(num));
    const numMap = numbers.map(num => num * 2);
    console.log(numMap);

    // for of on array like object
    // loop on an object using for in


    // add or remove from an array

    const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name:'webcam' , price: 700 , brand: 'Lal'};

// add newproduct to  products
//  copy (old array) products array and then add newproduct

const newProducts = [...products, newProduct];
console.log(newProducts);

// creat a new array without one specific item
