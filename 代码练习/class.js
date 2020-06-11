function Person(name,age) {
  this.name=name;
  this.age=age;
}

Person.prototype.sayName=function() {
  return this.name;
}

class Person{
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }

  sayName() {
    return this.name;
  }
}