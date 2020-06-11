function Rabbit() {

}

// Rabbit.prototype={
//   jumps:true
// }
Rabbit.prototype.jumps=true;
Rabbit.prototype={constructor:Rabbit};
let rabbit=new Rabbit();

// console.log(rabbit.constructor===Rabbit);

let obj={
  0:'hello',
  1:'world',
  length:2
}

obj.join=Array.prototype.join;
// console.log(obj.join(','))

function f(a,b) {
  console.log(a+b)
}

// Function.prototype.defer=function(ms) {
//   setTimeout(this,ms)
// }

// f.defer(1000);

Function.prototype.defer=function(ms){
  let f=this;
  return function(...args){
    setTimeout(()=>{f.apply(this,args)},ms)
  }
}

f.defer(1000)(1,2)

