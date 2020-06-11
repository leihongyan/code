function slow(x){
  console.log( `call width ${x}`);
  return x;
}

function cachingDecorator(func){
  let cache=new Map();
  return function(x){
    if(cache.has(x)){
      return cache.get(x);
    }
    let result=func(x);
    cache.set(x,result);
    return result;
  }
}

slow=cachingDecorator(slow);

// console.log(slow(1));
// console.log(slow(2));

function delay(f,ms){
  return function() {
    setTimeout(()=>{
      f.apply(this,arguments)
    },ms)
  }
}