// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   isAdult() {
//     if(this.age >= 18){
//         console.log(`Hello ${this.name} you can vote`);
//     }else{
//         console.log(`${this.name} you can not vote`)
//   }
    
//   } 
  
// }

// class User2 extends User {
//   constructor(name, age, pass, email) {
//     super(name, age); // reuse parent code
//     this.pass = pass;
//     this.email = email;
//   }
// }

// const u1 = new User("Ravi", 17);
// const u2 = new User2("Aman", 22, 1233, "ravi@gmail");

// console.log(u1);
// console.log(u2)


// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const chai = new User("chai", "chai@gmail.com", "123")

// console.log(chai);
// console.log(chai.changeUsername());

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }



// const tea = new User("tea", "tea@gmail.com", "123")
// console.log(tea)
// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return this.username.toUpperCase();
}


// 🔥 Child function
function Admin(username, email, password, role){
    User.call(this, username, email, password) // parent call
    this.role = role
}

// 🔥 Prototype inheritance
Admin.prototype = Object.create(User.prototype)

// 🔥 constructor fix
Admin.prototype.constructor = Admin

// 🔥 new method
Admin.prototype.getRole = function(){
    return this.role
}


// ✅ use
const chai = new Admin("chai", "chai@gmail.com", "123", "admin")

console.log(chai.encryptPassword())  // 123abc
console.log(chai.changeUsername())   // CHAI
console.log(chai.getRole())          // admin