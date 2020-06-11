var preorderTraversal=function(root){
  let result=[];
  function pre(root){
   if(root!==null){
     result.push(root);
     pre(root.left);
     pre(root.right);
   }
  }
  pre(root);
  return result;
}


