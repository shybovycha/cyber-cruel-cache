const BinaryTree = require('./binaryTree');

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this._length = 0;
  }

  add(value) {
    const newNode = new LinkedListNode(value);

    ++this._length;

    if (!this.root) {
      this.root = newNode;
    } else {
      let node = this.root;

      while (node.next) {
        node = node.next;
      }

      node.next = newNode;
    }

    return this.root;
  }

  remove() {
    const result = this.root.value;

    this.root = this.root.next;
    --this._length;

    return result;
  }

  forEach(handler) {
    let node = this.root;

    while (node) {
      handler.call(null, node.value);
      node = node.next;
    }
  }

  map(handler) {
    let node = this.root;
    let result = new LinkedList();

    while (node) {
      result.add(handler.call(null, node.value));
      node = node.next;
    }

    return result;
  }

  reduce(handler, initialValue) {
    let node = this.root;
    let acc = initialValue;

    while (node) {
      acc = handler.call(null, acc, node.value);
      node = node.next;
    }

    return acc;
  }

  get length() {
    return this._length;
  }

  dedup() {
    const tree = new BinaryTree();

    let node = this.root;

    while (node) {
      tree.add(node.value);
      node = node.next;
    }

    let result = new LinkedList();

    tree.traverseInOrder(value => result.add(value));

    return result;
  }
}

module.exports = LinkedList;
