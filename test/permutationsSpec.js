const should = require('should');

const permutations = require('../src/permutations');

describe('permutations', () => {
  it('does not change the initial collection', () => {
    const a = [ 1, 2 ];

    permutations(a);

    should(a).containDeepOrdered([ 1, 2 ]);
  });

  it('returns no permutations for empty list', () => {
    should(permutations([])).containDeep([ [] ]);
  });

  it('returns valid permutations for 1 element', () => {
    should(permutations([ 1 ])).containDeep([ [ 1 ] ]);
  });

  it('returns valid permutations for 2 elements', () => {
    should(permutations([ 4, 5 ])).containDeep([ [ 4, 5 ], [ 5, 4 ] ]);
  });

  it('returns valid permutations for 3 elements', () => {
    should(permutations([ 1, 2, 3 ])).containDeep([ [ 1, 2, 3 ], [ 2, 1, 3], [ 2, 3, 1 ], [ 1, 3, 2 ] ]);
  });
});
