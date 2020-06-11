var intersection=function(nums1,nums2){
  let result=new Set();
  let set2=new Set(nums2);
  for(let i=0;i<nums1.length;i++){
    if(set2.has(nums1[i])){
      result.add(nums1[i]);
    }
  }
  return Array.from(result);
}

console.log(intersection([1,2,34,423,54],[34,54]))