var kthToLast=function(head) {
  let p=head;
  for(let i=0;i<k;i++){
    p=p.next;
  }
  while(p){
    p=p.next;
    head=head.next;
  }

  return head.val;
}