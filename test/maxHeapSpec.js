const should = require('should');

const MaxHeap = require('../src/maxHeap');

describe('MaxHeap', () => {
  it('returns the values sorted by priority descending', () => {
    const a = new MaxHeap();

    a.add('fifth', 5);
    a.add('fourth', 4);
    a.add('third', 3);
    a.add('first', 1);
    a.add('second', 2);

    const result = [];

    while (a.length > 0) {
      result.push(a.remove().value);
    }

    should(result).containDeep([ 'fifth', 'fourth', 'third', 'second', 'first' ]);
  });
});
