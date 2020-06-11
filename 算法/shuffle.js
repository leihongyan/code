function shuffle(arr){
  let current=arr.length-1;
  while(current>-1){
    let random=Math.floor(current*Math.random());
    [arr[current],arr[random]]=[arr[random],arr[current]];
    current--;
  }
  return arr;
}

let arr=[12,43,543,232,564,4,56,32];
console.log(shuffle(arr));