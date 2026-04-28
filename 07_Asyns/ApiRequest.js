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
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
};

