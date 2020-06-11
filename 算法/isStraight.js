var isStraight=function(nums){
  if(nums.length<5)return false;
  nums=nums.sort((a,b)=>a-b);
  let wangNums=0;
  let grapNums=0;
  for(let i=0;i<nums.length-1;i++){
    if(nums[i]===0){
      wangNums++;
    }else if(nums[i]===nums[i+1]){
      return false;
    }else{
      grapNums+=(nums[i+1]-nums[i]-1);
    }
  }
  return grapNums<=wangNums;
}
console.log(isStraight([0,1,4,3,5]));