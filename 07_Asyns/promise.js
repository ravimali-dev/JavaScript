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


fetch("https://jsonplaceholder.typicode.com/users/1")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
.catch(function(error){
    console.log(error)
})