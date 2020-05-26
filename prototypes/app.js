//Experiments with prototype
// const Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge = function () {
//   return new Date().getUTCFullYear() - this.yearOfBirth;
// };

// const john = new Person('John', 1989, 'teacher');

// console.log(john);
// console.log(john.calculateAge());

// const User = function (login) {
// }

// let pers = { ...john, height: 183 };
// let pers1 = Object.assign(new Person(), john);

function User(userName, email) {
  this.userName = userName;
  this.email = email;
}
User.prototype.login = function() {
  console.log(`${this.userName} has logged in`);
  return this;
}
User.prototype.logout = function() {
  console.log(`${this.userName} has logged out`);
}

function Admin(userName, email,title) {
  User.call(this, userName, email);
  this.title = title  
}
Admin.prototype = Object.create(User.prototype)

Admin.prototype.delete = function(userName){
  console.log(`${userName} removed`);
}

const userOne = new User("test1", "test1@mail.com");
const userTwo = new User("test1", "test1@mail.com");
const admOne = new Admin("adminUser1", "test1@mail.com","Admin title");

console.log(userOne);
console.log(userTwo);
console.log(admOne);