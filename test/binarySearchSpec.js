const should = require('should');

const indexOf = require('../src/binarySearch');

describe('indexOf', () => {
  it('returns -1 for non-existing element', () => {
    const a = [ 1, 2, 4, 6, 19, 21, 25 ];

    should(indexOf(3)).eql(-1);
  });

  it('returns valid index for existing element in a sorted collection', () => {
    const a = [ 1, 2, 4, 6, 19, 21, 25 ];

    should(indexOf(25, a)).eql(6);
    should(indexOf(4, a)).eql(2);
  });
});
