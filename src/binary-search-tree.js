const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(root = null) {     
    this.rootNode = root;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = this.rootNode;

    if (node === null) {
      this.rootNode = new Node(data);
      return;
    }

    const searchTree = (node) => {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        }

        if (node.left !== null) return searchTree(node.left);        
      } 
      
      if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        } 
        
        if (node.right !== null) return searchTree(node.right);        
      } 
      
      return null;      
    };

    return searchTree(node);    
  }

  has(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) return true;

      current = (data < current.data) ? current.left : current.right;
    }

    return false;
  }

  find(data) {
    let current = this.rootNode;

    while (current.data !== data) {
      current = (data < current.data) ? current.left : current.right;
        
      if (current === null) return null; 
    }

    return current;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node == null) return null;
      
      if (data == node.data) {      
        if (node.left == null && node.right == null) return null;
        if (node.left == null) return node.right;  
        if (node.right == null) return node.left;

        // node has two children 
        let tempNode = node.right;

        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);

        return node;
      } 
      
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }      
     
      node.right = removeNode(node.right, data);
      return node;   
    }

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let current = this.rootNode;

    while (current.left !== null) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    let current = this.rootNode;

    while (current.right !== null) {
      current = current.right;
    }

    return current.data;
  }
}
