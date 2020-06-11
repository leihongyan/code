function debounce(fn,wait,immediate){
  let timer=null;
  return function(...args){
    clearTimeout(timer);
    if(!timer && immediate){
      fn.apply(this,args);
    }
    timer=setTimeout(()=>{
      fn.apply(this,args)
    })
  }
  
}