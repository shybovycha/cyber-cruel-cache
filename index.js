class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeDuplicates = startNode => {
  const values = new Set();

  let previousNode = startNode;
  let node = previousNode.next;

  values.add()

  while (node) {
    if (!values.has(node.value)) {
      values.add(node.value);
      previousNode.next = node;
      previousNode = node;
    } else {
      previousNode.next = null;
    }

    node = node.next;
  }

  return startNode;
};

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(2);
const n5 = new Node(1);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let node = n1;

while (node) {
  console.log(node.value);
  node = node.next;
}

console.log('dedup');

node = removeDuplicates(n1);

while (node) {
  console.log(node.value);
  node = node.next;
}
