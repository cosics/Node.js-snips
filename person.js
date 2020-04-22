/*const person = {
  name: "John Doe",
  age: 30
}; */

//Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
//})

console.log(__dirname, __filename);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    var result = `My name is ${this.name} and i am ${this.age}`;
    if (this.age > 30) {
      result += " which means i am kinda old but i don't want to show";
    }
    console.log(result);
  }
}

module.exports = Person;
//module.exports = person;
