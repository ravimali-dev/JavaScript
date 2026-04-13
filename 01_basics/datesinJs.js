// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026,2,30)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("03-30-2026")
// console.log(myCreatedDate.toDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "narrow",
    
// })

// const date = new Date();
// console.log(date.getTime())

// let start = Date.now();

// setTimeout(() => {

// let end = Date.now();

// console.log(end - start);

// },5000);

// let now = new Date();
// console.log(now);

let timestamp = Date.now();

let date = new Date(timestamp);

console.log(date.toDateString());

let d = new Date(2026, 2, 30);

console.log(d.getMonth());