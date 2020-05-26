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

// const arr = [1, 2, 3, 4, 5];
// var arrStr = JSON.stringify(arr);
// localStorage.setItem('arr', arrStr);

// console.log(localStorage);

// let d = JSON.parse(localStorage.getItem('arr'));
// console.log(d);

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//   }
// }

// class Admin extends User {
//   constructor(username, email) {
//     super(username, email);
//   }
//   deleteUser(user) {

//   }
// }

function User(username, email) {
  this.username = username;
  this.email = email;
  this.login = function () {
    console.log(`${this.username} has logged in`);
  }
}
let u1 = new User('mario', 'mario@mail.ru');
console.log(u1);
User.prototype = {
  logout : function () {
    console.log(`${this.username} has logged out`)
  }, ...User.prototype
};

let u2 = new User('luigi', 'luigi@mail.ru');
//u1.login();
u2.logout();

