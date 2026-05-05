class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isAdult() {
    if(this.age >= 18){
        console.log(`Hello ${this.name} you can vote`);
    }else{
        console.log(`${this.name} you can not vote`)
  }
    
  } 
  
}

class User2 extends User {
  constructor(name, age, pass, email) {
    super(name, age); // reuse parent code
    this.pass = pass;
    this.email = email;
  }
}

const u1 = new User("Ravi", 17);
const u2 = new User2("Aman", 22, 1233, "ravi@gmail");

console.log(u1);
console.log(u2)
