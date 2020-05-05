///Experiments with prototype
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
// let pers = { ...john, height: 183 };
// let pers1 = Object.assign(new Person(), john);

function fib_R(val) {
  let p_2 = 0;
  let p_1 = 1;

  if (val == 0) {
    return p_2;
  }

  if (val == 1 || val == 2) {
    return p_1;
  }

  return fib(val - 1) + fib(val - 2);
};

function fib(num) {
  let next = 1;
  let p2 = 1;
  let p1 = 0

  for (let i = 2; i <= num; i++) {
    next = p1 + p2;
    p1 = p2;
    p2 = next;
  }
  return next;
};



console.log(fib_R(6));

console.log(fib(6));

