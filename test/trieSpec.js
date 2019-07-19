const should = require('should');

const Trie = require('../src/trie');

describe('Trie', () => {
  const t = new Trie();

  t.add('jira');
  t.add('java');
  t.add('jsd');
  t.add('jamaica');
  t.add('babaica');

  describe('#contains', () => {
    it('returns true for existing keys', () => {
      should(t.contains('jira')).be.true();
      should(t.contains('jamaica')).be.true();
      should(t.contains('jsd')).be.true();
      should(t.contains('babaica')).be.true();
    });

    it('returns false for non-existing keys', () => {
      should(t.contains('zazaica')).be.false();
      should(t.contains('arij')).be.false();
      should(t.contains('sdj')).be.false();
      should(t.contains('JavaScript')).be.false();
      should(t.contains('Java')).be.false();
      should(t.contains('jsds')).be.false();
    });
  });
});
