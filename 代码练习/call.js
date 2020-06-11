Function.prototype.call2=function(context){
  let context=context ||  window;
  context.fn=this;
  let args=[...arguments].slice(1);
  const result=context.fn(...args);
  delete context.fn
  return result;
}