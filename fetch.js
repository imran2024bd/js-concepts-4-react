// 01 JSON  =>  stringify , parse
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// js object tr to JSON
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);


// JSON to object

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch

//2. fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));