// localStorage.setItem('name', 'Gizmo');
// localStorage.setItem('age', '5');

// const name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

// localStorage.setItem('age', 6);
// age = localStorage.getItem('age');
// console.log(age);

//localStorage.removeItem('age');
//localStorage.removeItem('name');
//localStorage.clear();

const arr = [1, 2, 3, 4, 5];
var arrStr = JSON.stringify(arr);
localStorage.setItem('arr', arrStr);

console.log(localStorage);

let d = JSON.parse(localStorage.getItem('arr'));
console.log(d);