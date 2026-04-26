// let xhr = new XMLHttpRequest();

// xhr.open("GET", 'https://api.github.com/users/hiteshchoudhary');

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         let data = JSON.parse(xhr.response);
//         console.log(data.followers);
//     }
// };

// xhr.send();
//  const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', requestUrl)
//     xhr.onreadystatechange = function(){
//         console.log(xhr.readyState);
//         if (xhr.readyState === 4) {
//             const data = JSON.parse(this.responseText)
//             console.log(typeof data);
//             console.log(data.followers);
//         }
//     }
//     xhr.send();
// const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl)
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
// };

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username: "Ravi", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))