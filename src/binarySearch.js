/**
 * Uses binary search algorithm to look for value in a sorted collection.
 *
 * @param {any} value value to look for
 * @param {Array} collection sorted collection to look in
 */
const indexOf = (value, collection = []) => {
  let start = 0;
  let end = collection.length - 1;

  if (collection[start] === value) {
    return start;
  } else if (collection[end] === value) {
    return end;
  }

  while (start < end) {
    const middle = Math.ceil((end - start) / 2);

    if (middle === start || middle === end) {
      break;
    }

    if (collection[middle] === value) {
      return middle;
    } else if (collection[middle] > value) {
      end = middle;
    } else {
      start = middle;
    }
  }

  return -1;
};

module.exports = indexOf;
