function throttle(fn,wait){
  let previous=0;
  let timer=null;
  return function(...args){
    if(Date.now() - previous>wait){
      clearTimeout(timer);
      timer=null;
      previous=Date.now();
      fn.apply(this,args);
    }else if(!timer){
      timer=setTimeout(()=>{
        timer=null;
        fn.apply(this,args);
      },wait)
    }
  }
}