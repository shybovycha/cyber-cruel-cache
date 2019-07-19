const should = require('should');

const MinHeap = require('../src/minHeap');

describe('MinHeap', () => {
  it('returns the values sorted by priority ascending', () => {
    const a = new MinHeap();

    a.add('fifth', 5);
    a.add('fourth', 4);
    a.add('third', 3);
    a.add('first', 1);
    a.add('second', 2);

    const result = [];

    while (a.length > 0) {
      result.push(a.remove().value);
    }

    should(result).containDeep([ 'first', 'second', 'third', 'fourth', 'fifth' ]);
  });
});
