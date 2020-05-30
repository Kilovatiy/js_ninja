const greet = (name) => {
  console.log(`hello ${name}`);
}

greet('user1');
greet('user2');
greet('user4');

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