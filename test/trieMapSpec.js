const should = require('should');

const TrieMap = require('../src/trieMap');

describe('TrieMap', () => {
  const t = new TrieMap();

  t.add('jira', 'jira value');
  t.add('java', 'java value');
  t.add('jsd', 'jsd value');
  t.add('jamaica', 'jamaica coffee');
  t.add('babaica', 'the big unknown');

  describe('#findByPrefix', () => {
    it('returns all entries corresponding to the first letter', () => {
      should(t.findByPrefix('j')).containDeep([ 'jira value', 'java value', 'jsd value', 'jamaica coffee' ]);
    });

    it('returns all entries corresponding to the first two letters', () => {
      should(t.findByPrefix('ja')).containDeep([ 'java value', 'jamaica coffee' ]);
    });

    it('returns all entries corresponding to the full key', () => {
      should(t.findByPrefix('jira')).containDeep([ 'jira value' ]);
    });

    it('returns empty list for non-existing key', () => {
      should(t.findByPrefix('Zorro!')).be.empty();
    });
  });
});
