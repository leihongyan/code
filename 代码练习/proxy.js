// get(target, property, receiver) {
//   getLogger(target, property)
//   if (typeof target[property] === 'object' && target[property] !== null) {
//     return new Proxy(target[property], handler)
//   } else {
//     return Reflect.get(target, property)
//   }
// }

const p = new Proxy({}, {
  set(target, propKey, value) {
    if (propKey === 'name') {
      throw new TypeError('name 不能被修改');
    }
    target[propKey]=value;
  }
  
})

// p.name='ds';
p.a=11;
console.log(p.a);