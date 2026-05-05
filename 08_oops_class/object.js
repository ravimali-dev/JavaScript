// const rami = {
//   username: "Rami",
//   greet: function() {
//     console.log(this) // "Rami"
//     // this = rami object (kyunki rami ne call kiya)
//   }
// }
// rami.greet() 

obj = {};

function user(username){
   this.username = username
}
let u1 = new  user("rami");
console.log(u1.username)