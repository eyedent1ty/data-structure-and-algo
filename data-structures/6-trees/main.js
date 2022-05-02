const BinarySearchTree = require('./binary-search-tree');

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);

console.log(JSON.stringify(traverse(tree.getRoot())));

function traverse(node) { 
  const tree = {
    value: node.getValue()
  };
  tree.left = node.getLeft() === null ? null : traverse(node.getLeft());
  tree.right = node.getRight() === null ? null : traverse(node.getRight());
  return tree;
}