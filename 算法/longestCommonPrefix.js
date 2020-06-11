let longestCommonPrefix =function(str) {
  if(str.length===0 || str===null)return '';
  let preStr=str[0];
  for(let i=1;i<str.length;i++){
    let j=0;

    for(;j<preStr.length && j<str[i].length;j++){
      if(preStr.charAt(j)!==str[i].charAt(j))break;
    }
    preStr=preStr.substring(0,j);
    if(preStr==='')return '';
  }
  return preStr;
}

let str=["flower","flow","flight"];


let longestCommonPrefix1=function (strs){
  if(strs===null || strs.length===0)return;
  let min=0,max=0;
  for(let i=0;i<strs.length;i++){
    if(strs[i].length<min)min=i;
    if(strs[i].length>max)max=i;
  }
  for(let j=0;j<strs[min].length;j++){
    if(strs[min].charAt(j) !== strs[max].charAt(j)){return strs[min].substring(0,j);}
  }
  return strs[min];
}
console.log(longestCommonPrefix1(str));