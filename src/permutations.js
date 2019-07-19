const permutations = (elements, prev = [], acc = []) => {
  if (elements.length == 0) {
    acc.push(prev.concat(elements));
    return acc;
  }
​
  for (let i = 0; i < elements.length; ++i) {
    permutations(
      elements.slice(0, i).concat(elements.slice(i + 1)),
      prev.concat([ elements[i] ]),
      acc
    );
  }
​
  return acc;
};
