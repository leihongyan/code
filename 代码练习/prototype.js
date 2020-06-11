// let animal={
//   eats:true,
//   walk(){
//     console.log('Animal walk');
//   }
// }

// let rabbit={
//   jumps:true,
//   __proto__:animal
// }

// let longEar={
//   earLength:10,
//   __proto__:rabbit
// }

// longEar.walk();
// console.log(longEar.jumps);

/*
 for in  循环
*/

// console.log(Object.keys(rabbit));

// for(let prop in rabbit){
//   let isown=rabbit.hasOwnProperty(prop);
//   if(isown){
//     // console.log(prop)
//   }
// }


let animal={
  eats:true
}

// let rabbit=Object.create(animal);
// console.log(rabbit.eats);
// console.log(Object.getPrototypeOf(rabbit) === animal)

// let rabbit=Object.create(animal,{
//   jumps:{
//     value:true,
//     enumerable:true,
//     configurable:true
//   },
//   walk:{
//     value:function() {
//       console.log(this.jumps)
//     }
//   }
// })

// console.log(rabbit.jumps);
// console.log(rabbit.walk())

// let clone=Object.create(Object.getPrototypeOf(obj),Object.getOwnPropertyDescriptor(obj))

let dictionary = Object.create(null, {
  toString: { // 定义 toString 属性
    value() { // value 是一个 function
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple 和 __proto__ 在循环中
for(let key in dictionary) {
  console.log(key); // "apple"，然后是 "__proto__"
}

// 通过 toString 处理获得的以逗号分隔的属性列表
console.log(dictionary.toString()); // "apple,__proto__"