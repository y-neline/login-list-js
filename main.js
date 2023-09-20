const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';

    }
}


// let score;
// score = 10
// console.log(score)
// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// //Concatenation
// console.log(`My name is ` + name + ' and I am ' + age
// );
// //Template String
// const hello = (`My name is ${name} and I am ${age}`);

// console.log(hello);
// const s = `Hello, World!, then`;
// console.log(s.substring(0, 6).toUpperCase());
// console.log(s.split(', '));


// //ARRAYS
// const numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ['apples', 'oranges', 'pears']
// /*
// you cannot do
// fruits = []
// because it is const
// */
// fruits[3] = 'grapes';

// console.log(fruits[3]);
// fruits.push('mangos');
// fruits.unshift('strawberries');
// fruits.pop();
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits.indexOf('hel'));
// console.log(fruits);


// //OBJECT LITERALS   
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// // destructuring
// const {firstName, lastName, address: {city}} = person;
// console.log(firstName);

// // you can add properties
// person.email = 'john@gmail';
// console.log(person.email);


// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true

//     },
//     {
        
//         id: 3,
//         text: 'Dentist app',
//         isCompleted: false
//     }
// ];
// // console.log(todos[1].text)

// Convert to JSON(in json keys and quotes are in double quotes)
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// // For
// for(let i = 0; i < 10; i++){
//     console.log(`For loop Number: ${i}`);
// }
// //while
// let i = 0
// while(i < 10){
//     console.log(`While loop number: ${i}`);
//     i++;
// }


// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.text);
// }

// // forEach, map, filter
// // forEach:
// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// //map
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

// // filter
// const todoCompleted= todos.filter(function(todo){
//     return todo.isCompleted === true ;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompleted);

// // Conditionals
// const x = '10';
// if(x == 10) {
//     console.log('x is 10');
// } // will be TRUE, "==" checks only values not data type

// const y = '10';
// if(y === 10) {
//     console.log('y is 10');
// } // will be FALSE, "===" also checks for data type

// else{
//     console.log('y is not 10');
// }

// //FUNCTIONS
// function addNums(num1 = 1, num2 = 1) {
//     return num1 + num2;

// }
// console.log(addNums(5, 15));
// // New type of functions
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// console.log(addNums(5, 15));



// //Constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date (dob);
// }
// // methods put separately from attributes using .prototype:
// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // Class
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date (dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     } 
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());

// // DOM

// // Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));
// // Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// // ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// })

