class TrieNode {
  constructor(char, endsWord = false) {
    this.char = char;
    this.endsWord = endsWord;
    this.children = [];
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(undefined, false);
  }

  add(word) {
    let node = this.root;

    for (let i = 0; i < word.length; ++i) {
      const ch = word.charAt(i);

      node = this._matchChar(new TrieNode(ch), node);
    }

    node.endsWord = true;
  }

  contains(word) {
    let node = this.root;

    for (let i = 0; i < word.length; ++i) {
      const ch = word.charAt(i);

      node = this._matchChar(new TrieNode(ch), node);

      if (!node) {
        return false;
      }
    }
    
    return node.endsWord;
  }

  _matchChar(haystack, node) {
    for (let child of node.children) {
      if (child.char === haystack.char) {
        return child;
      }
    }

    node.children.push(haystack);
    return haystack;
  }
}

module.exports = Trie;
