const should = require('should');

const BinaryTree = require('../src/binaryTree');

describe('BinaryTree', () => {
  describe('#traverseInOrder', () => {
    it('visits every node in sorted ascending order', () => {
      const t = new BinaryTree();

      t.add(10);
      t.add(5);
      t.add(7);
      t.add(9);
      t.add(2);
      t.add(1);
      t.add(3);
      t.add(6);
      t.add(11);
      t.add(8);
      t.add(4);

      const result = [];

      t.traverseInOrder(value => result.push(value));

      should(result).containDeep([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
    });
  });
});
