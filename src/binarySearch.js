let a = [ 1, 2, 4, 6, 19, 21, 25 ];

const binaryIndexOf = (value, a = []) => {
  let start = 0;
  let end = a.length - 1;

  if (a[start] === value) {
    return start;
  } else if (a[end] === value) {
    return end;
  }

  while (start < end) {
    let middle = Math.ceil((end - start) / 2);

    if (middle === start || middle === end) {
      break;
    }

    if (a[middle] === value) {
      return middle;
    } else if (a[middle] > value) {
      end = middle;
    } else {
      start = middle;
    }

    console.log('?');
  }

  return -1;
};

console.log(binaryIndexOf(1, a));
console.log(binaryIndexOf(2, a));
console.log(binaryIndexOf(4, a));
console.log(binaryIndexOf(21, a));
console.log(binaryIndexOf(7, a));
