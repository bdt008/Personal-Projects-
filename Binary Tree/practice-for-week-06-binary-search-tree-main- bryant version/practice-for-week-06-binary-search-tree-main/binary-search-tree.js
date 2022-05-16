// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    if(currentNode === null) {
      this.root = new TreeNode(val);
      return
    } else {
      const searchTree = function(currentNode) {
        if(val < currentNode.val) {
          if(currentNode.left === null) {
            currentNode.left = new TreeNode(val);
            return;
          } else if (currentNode.left !== null) {
            return searchTree(currentNode.left);
          }
        } else if (val > currentNode.val) {
          if(currentNode.right === null) {
            currentNode.right = new TreeNode(val);
            return;
          } else if (currentNode.right !== null) {
            return searchTree(currentNode.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(currentNode)
    }
  }

  search(val) {
    let current = this.root;

    while (current) {
      if(val === current.val) {
        return true;
      }
      if(val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    if(currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    if(currentNode !== null) {
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    if (currentNode !== null) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  }

    // Breadth First Traversal - Iterative (recursive)
  breadthFirstTraversal(currentNode = this.root) {
    const queue = [];
    queue.push(this.root);

    while (queue.size > 0) {
      let node = queue.shift();
      console.log(node.val);

      queue.push(node.left);
      queue.push(node.right); 
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
