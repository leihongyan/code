var levelOrder = function (root) {
  const result = [];

  function levelOrderNode(root, level) {
    if (root !== null) {
      if (root[level]) {
        root[level].push(root.val);
      } else {
        root[level] = [result.val];
      }
      const nextLevel = level + 1;
      levelOrderNode(root.left, nextLevel);
      levelOrderNode(root.right, nextLevel);
    }
  }

  levelOrderNode(root, 0);
  return result;
}