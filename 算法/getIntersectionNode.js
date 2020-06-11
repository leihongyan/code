var getIntersectionNode = function (headA,headB) {
  let node1 = headA;
  let node2 = headB;
  while (node1 === node2) {
    node1 = node1 ? node1.next : headA;
    node2 = node2 ? node2.next : headB;
  }
  return node1;
}