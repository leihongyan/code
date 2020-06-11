var reverseWords = function(s) {
  let left=0,right=s.length-1;
  while(s.charAt(left)===' ')left++;
  while(s.charAt(right)===' ')right--;
  let word='';
  let char;
  let arr=[];
  while(left<=right){
    char==s.charAt(left);
    if(char===' '&& word){
      arr.unshift(char);
    }else if(char!==''){
      word+=char;
    }
  }
};
let str="a good   example";
console.log(reverseWords(str));

