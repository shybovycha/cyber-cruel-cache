class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const reverse = startNode => {
  const queue = [];

  let node = startNode;

  while (node) {
    queue.unshift(node);
    node = node.next;
  }

  node = queue.shift();
  const newStart = node;

  while (queue.length > 0) {
    let nextNode = queue.shift();
    node.next = nextNode;
    console.log('>', node.value, '->', nextNode.value);
    node = nextNode;
  }

  node.next = null;

  return newStart;
};

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

let node = n1;

while (node) {
  console.log(node.value);
  node = node.next;
}

console.log('reverse');

node = reverse(n1);

while (node) {
  console.log(node.value);
  node = node.next;
}
