const should = require('should');

const LinkedList = require('../src/linkedList');

describe('LinkedList', () => {
  describe('#length', () => {
    it('returns 0 for an empty list', () => {
      const a = new LinkedList();

      should(a).have.length(0);
    });

    it('returns the number of elements in the list', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(1);
      a.add(2);
      a.add(2);
      a.add(3);

      should(a).have.length(5);
    });
  });

  describe('#dedup', () => {
    it('does not change the initial list', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(1);
      a.add(2);
      a.add(2);
      a.add(3);

      const b = a.dedup();

      should(a).have.length(5);
      should(b).have.length(3);
    });

    it('returns a list with no duplicates', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(1);
      a.add(2);
      a.add(2);
      a.add(3);

      const b = a.dedup();

      const bArray = b.reduce((acc, elt) => acc.concat([ elt ]), []);

      should(a).have.length(5);
      should(b).have.length(3);
      should(bArray).containDeep([ 1, 2, 3 ]);
    });
  });

  describe('#forEach', () => {
    it('does not change the initial list', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(1);
      a.add(2);
      a.add(2);
      a.add(3);

      a.forEach(elt => elt * 2);

      const aArray = a.reduce((acc, elt) => acc.concat([ elt ]), []);

      should(a).have.length(5);
      should(aArray).containDeep([ 1, 1, 2, 2, 3 ]);
    });

    it('iterates over each element', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(1);
      a.add(2);
      a.add(2);
      a.add(3);

      const aArray = [];

      a.forEach(elt => aArray.push(elt));

      should(a).have.length(5);
      should(aArray).containDeep([ 1, 1, 2, 2, 3 ]);
    });
  });

  describe('#map', () => {
    it('does not change the initial list', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(1);
      a.add(2);
      a.add(2);
      a.add(3);

      a.map(elt => elt + 2);

      const aArray = a.reduce((acc, elt) => acc.concat([ elt ]), []);

      should(a).have.length(5);
      should(aArray).containDeep([ 1, 1, 2, 2, 3 ]);
    });

    it('returns a list with changed values', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(1);
      a.add(2);
      a.add(2);
      a.add(3);

      const b = a.map(elt => elt + 2);

      const bArray = b.reduce((acc, elt) => acc.concat([ elt ]), []);

      should(bArray).containDeep([ 3, 3, 4, 4, 5 ]);
    });
  });

  describe('#reduce', () => {
    it('returns a calculated value', () => {
      const a = new LinkedList();

      a.add(1);
      a.add(-1);
      a.add(2);
      a.add(-2);
      a.add(3);

      const result = a.reduce((acc, elt) => acc + elt, 0);

      should(result).be.equal(3);
    });
  });
});
