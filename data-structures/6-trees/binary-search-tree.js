class Node {

  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  setLeft(left) {
    this.left = left;
  }

  setRight(right) {
    this.right = right;
  }

  setValue(value) {
    this.value = value;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }

  getValue() {
    return this.value;
  }

}

class BinarySearchTree {
  
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  insert(value) {

    const newNode = new Node(value);

    // If the tree is empty, then set the new inserted node as the root
    if (!this.root) {
      this.root = newNode; 
      return;
    }
    let currentNode = this.root;
    while (true) {
      // if the new Node is less than the current node
      if (newNode.getValue() < currentNode.getValue()) {
        // check if there are alreay existing node to the left child of the current node
        if (currentNode.getLeft() === null) {
          currentNode.setLeft(newNode);
          break;
        // if there are existing node on the left of the current node
        }
        currentNode = currentNode.getLeft();
        continue;

      } else {
        // otherwise,
        // check if the right of the current node is empty
        if (currentNode.getRight() === null) {
          currentNode.setRight(newNode);
          break;
        }
        currentNode = currentNode.getRight();
        continue;
      }
    }
  }

  lookup(value) {
    // If the BST is empty, then simply terminate this method
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      // If the input value is smaller than current node's value
      if (value < currentNode.getValue()) {
        currentNode = currentNode.getLeft();
        continue;
      } else if(value > currentNode.getValue()) {
        currentNode = currentNode.getRight();
        continue;
      } else {
        return currentNode
      }
    }
    return null;
  }

  // **ADVANCED
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.getValue()) {
        parentNode = currentNode;
        currentNode = currentNode.getLeft();
      } else if (value > currentNode.getValue()) {
        parentNode = currentNode;
        currentNode = currentNode.getRight();
      } else if (value === currentNode.getValue()) {
        // We have a match, get to work!

        // Option 1: No right child:
        if (!currentNode.getRight()) {
          if (!parentNode) {
            this.root = currentNode.getLeft();
          } else {
            if (currentNode.getValue() < parentNode.getValue()) {
              parentNode.setLeft(currentNode.getLeft());
            } else if (currentNode.getValue() > parentNode.getValue()) {
              parentNode.setRight(currentNode.getLeft());
            }
          }
        } else if (!currentNode.getRight().getLeft()) {
          if (!parentNode) {
            this.root = currentNode.getLeft();
          } else {
            currentNode.getRight().setLeft(currentNode.getLeft());

            if (currentNode.getValue() < parentNode.getValue()) {
              parentNode.setLeft(currentNode.getRight());
            } else if (currentNode.getValue > parentNode.getValue()) {
              parentNode.setRight(currentNode.getRight());
            }
          }
        } else {

          // find the Right child's left most child
          let leftmost = currentNode.getRight().getLeft();
          let leftmostParent = currentNode.getRight();

          while (leftmost.getLeft() != null) {
            leftmostParent = leftmost;
            leftmost = leftmost.getLeft();
          }

          // Parent's left subtree is now letftmost's right subtree
          leftmostParent.setLeft(leftmost.getRight());
          leftmost.setLeft(currentNode.getLeft());
          leftmost.setRight(currentNode.getRight());

          if (!parentNode) {
            this.root = leftmost;
          } else {
            if (currentNode.getValue() < parentNode.getValue()) {
              parentNode.setLeft(leftmost);
            } else if (currentNode.value > parentNode.getValue()) {
              parentNode.setRight(leftmost);
            }
          }
        }
        return;
      }
    }
  }
}

module.exports = BinarySearchTree;