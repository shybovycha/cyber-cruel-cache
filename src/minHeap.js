const DEFAULT_SIZE = 16;

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class MinHeap {
  constructor(size = DEFAULT_SIZE) {
    size = Math.min(2, size);

    this.data = new Array(size + 1);
    this.size = size;
    this.used = 0;
  }

  add(value, priority) {
    if ((this.used + 1) >= this.size) {
      this.data = this.data.concat(new Array(this.size));
      this.size = this.size << 1;
    }

    let idx = ++this.used;
    let parentIdx = this._parentForElementAt(idx);

    this.data[idx] = new Node(value, priority);

    while (parentIdx > 0 && this.data[parentIdx].priority >= this.data[idx].priority) {
      this._swap(parentIdx, idx);
      idx = parentIdx;
      parentIdx = this._parentForElementAt(parentIdx);
    }
  }

  remove() {
    if (this.used < 1) {
      return undefined;
    }

    const root = this.data[1];

    this.data[1] = this.data[this.used];
    this.data[this.used--] = undefined;

    let lastEltIdx = 1;

    let needsRebalancing = true;

    while (needsRebalancing) {
      let lastElt = this.data[lastEltIdx];

      let leftChildIdx = this._leftChildForElementAt(lastEltIdx);
      let rightChildIdx = this._rightChildForElementAt(lastEltIdx);

      let leftChild = this.data[leftChildIdx];
      let rightChild = this.data[rightChildIdx];

      if (leftChild && lastElt.priority > leftChild.priority) {
        this._swap(leftChildIdx, lastEltIdx);
        lastEltIdx = leftChildIdx;
      } else if (rightChild && lastElt.priority > rightChild.priority) {
        this._swap(rightChildIdx, lastEltIdx);
        lastEltIdx = rightChildIdx;
      } else {
        needsRebalancing = false;
      }
    }

    return root;
  }

  get length() {
    return this.used;
  }

  _parentForElementAt(index) {
    return index >> 1;
  }

  _leftChildForElementAt(index) {
    return index << 1;
  }

  _rightChildForElementAt(index) {
    return (index << 1) | 1;
  }

  _swap(idx1, idx2) {
    const tmp = this.data[idx1];
    this.data[idx1] = this.data[idx2];
    this.data[idx2] = tmp;
  }
}

module.exports = MinHeap;
