// class Car {
//   // Class ke andar properties aur methods hote hain
//   constructor(brand, color) {
//     this.brand = brand;   // property
//     this.color = color;   // property
//   }

//   drive() {             // method (function inside class)
//     console.log(`${this.brand} chal rahi hai!`);
//   }
// }

// const myCar = new Car('Toyota', 'Red');  // Object 1
// const dadCar = new Car('Honda', 'White'); // Object 2

// myCar.drive();   // → Toyota chal rahi hai!
// dadCar.drive();  // → Honda chal rahi hai!

// console.log(myCar.brand);  // → Toyota
// console.log(dadCar.color); // → White

class Student {
  constructor(name, age, grade) { // yeh auto-call hota hai
    this.name  = name;
    this.age   = age;
    this.grade = grade;
    this.marks = [];  // default value bhi set kar sakte ho
    console.log(`Student ${name} bana!`);
  }

  addMark(mark) {
    this.marks.push(mark);
  }
}

const s1 = new Student('Rahul', 17, '12th');
// Console: "Student Rahul bana!" — automatically!
s1.addMark(95);
console.log(s1.marks); // → [95]