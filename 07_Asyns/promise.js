// const dabba = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve("Data taiyaar hai!"); // 1 sec baad resolve
//   }, 1000);
// });

// dabba
//   .then(function(result) {       // jab resolve hua
//     console.log("Mila:", result); // "Mila: Data taiyaar hai!"
//     return result + " processed"; // agle .then() ko dega
//   })
//   .then(function(result2) {      // chain kar sakte ho
//     console.log(result2);
//   })
//   .catch(function(error) {       // jab reject hua
//     console.log("Error:", error);
//   })
//   .finally(function() {          // hamesha chalta hai
//     console.log("Kaam khatam!");
//   });


fetch( 'https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.followers)
})
.catch(function(error){
    console.log(error)
})

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user.username);
// })