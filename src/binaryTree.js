class BinaryTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new BinaryTreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let node = this.root;

    while (node) {
      if (value === node.value) {
        break;
      }

      if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
          break;
        } else {
          node = node.right;
        }
      } else if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
          break;
        } else {
          node = node.left;
        }
      }
    }
  }

  traverseInOrder(handler) {
    this._traverseInOrder(handler, this.root);
  }

  _traverseInOrder(handler, root) {
    if (!root) {
      return;
    }

    this._traverseInOrder(handler, root.left);
    handler.call(null, root.value);
    this._traverseInOrder(handler, root.right);
  }
}

module.exports = BinaryTree;
