const take = (collection, n) => collection.slice(0, n);

const drop = (collection, n) => collection.slice(n);

const removeAt = (collection, idx) => take(collection, idx).concat(drop(collection, idx + 1));

const permutations = (elements, prev = [], acc = []) => {
  if (elements.length == 0) {
    return acc.concat([ prev ]);
  }

  for (let i = 0; i < elements.length; ++i) {
    acc = permutations(
      removeAt(elements, i),
      prev.concat([ elements[i] ]),
      acc
    );
  }

  return acc;
};

module.exports = permutations;
