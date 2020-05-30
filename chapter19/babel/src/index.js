const greet = (name) => {
  console.log(`hello ${name}`);
}

greet('mario');
greet('luigi');
greet('yoyo');

class User {
  constructor() {
    this.score = 0;
  }
  showScore() {
    console.log(this.score++);
  }
}

const user1 = new User();
user1.showScore();