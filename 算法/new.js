function _new(constructor, ...args){
  let obj=Object.create(constructor.prototype);
  const result=constructor.apply(obj,args);
  return typeof result==='object'?result:obj;
}