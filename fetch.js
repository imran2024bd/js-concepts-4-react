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
fetch('url')
    .then(res => res.json());
    .then ( data => console.log(data));