async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2')
}

console.log('script start');

setTimeout(function(){
  console.log('setTimeout');
})

async1();

new Promise(function(){
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})

console.log('script end')