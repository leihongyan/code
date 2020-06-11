// 1   借用构造函数继承
// function Father() {
//   this.clolors=['red','blue'];
// }

// function Son() {
//   Father.call(this);
// }

// let instance1=new Son();
// instance1.clolors.push('black');
// console.log(instance1.clolors)

// let instance2=new Son();
// console.log(instance2.clolors)

// 2. 组合继承
// function Father(name){
//   this.name=name;
//   this.colors=[
//     'red','blue'
//   ]
// }
// Father.prototype.sayName = function(){
// 	console.log(this.name);
// };

// function Son(name,age){
//   Father.call(this,name);
//   this.age=age;
// }

// Son.prototype=new Father();
// Son.prototype.sayAge=function() {
//   console.log(this.age);
// }

// var instance1 = new Son("louis",5);
// instance1.colors.push("black");
// console.log(instance1.colors);//"red,blue,green,black"
// instance1.sayName();//louis
// instance1.sayAge();//5

// var instance1 = new Son("zhai",10);
// console.log(instance1.colors);//"red,blue,green"
// instance1.sayName();//zhai
// instance1.sayAge();//10



// 3.寄生式继承

function Parent(value){
  this.value=value;
}

Parent.prototype.getValue=function() {
  return this.value;
}

function Child(value){
  Parent.call(this,value);
}

Child.prototype=new Parent();
const child=new Child(1);
child.getValue();
console.log(child instanceof Parent)
// 4 寄生组合式继承
function Parent(value){
  this.value=value;
}

Parent.prototype.getValue=function() {
  return this.value;
}
function Child(value){
  Parent.call(this,value);
}

Child.prototype=Object.create(Parent.prototype,{
  constructor:{
    value:Child,
    enumerable:false,
    writeable:true,
    configurable:true
  }
})
// new

// function _new(fn, ...arg) {
//   const obj = Object.create(fn.prototype);
//   const ret = fn.apply(obj, arg);
//   return ret instanceof Object ? ret : obj;
// }