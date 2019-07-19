class Node {
  constructor(key, value = null, children = {}) {
    this.key = key;
    this.value = value;
    this.children = children;
    this.endsWord = false;
  }
}

class TrieMap {
  constructor() {
    this.root = new Node(null);
  }

  add(key, value) {
    let node = this.root;

    for (let i = 0; i < key.length; ++i) {
      const ch = key.charAt(i);

      let child = node.children[ch];

      if (!child) {
        child = new Node(ch);
        node.children[ch] = child;
      }

      node = child;
    }

    node.endsWord = true;
    node.value = value;
  }

  find(key) {
    let node = this.root;

    for (let i = 0; i < key.length; ++i) {
      const ch = key.charAt(i);

      let child = node.children[ch];

      if (!child) {
        return undefined;
      }

      node = child;
    }

    if (node.endsWord) {
      return node.value;
    }

    return undefined;
  }

  findByPrefix(key) {
    let node = this.root;

    for (let i = 0; i < key.length; ++i) {
      const ch = key.charAt(i);

      let child = node.children[ch];

      if (!child) {
        return [];
      }

      node = child;
    }

    let children = Object.values(node.children);
    let results = [];

    if (node.endsWord) {
      results.push(node.value);
    }

    while (children.length > 0) {
      node = children.shift();

      if (node.endsWord) {
        results.push(node.value);
      }

      children = children.concat(Object.values(node.children));
    }

    return results;
  }
}

module.exports = TrieMap;
