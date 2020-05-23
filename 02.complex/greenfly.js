const calcParents = (n) => {
  if (n <= 7) {
    return 1;
  } else {
    return calcChildren(n - 7) + calcParents(n - 1);
  }
};

const calcChildren = (n) => {
  return calcParents(n) * 8;
};

const totalGreenfly = (n) => {
  var total = 1;
  for (let i = 1; i < n + 1; i++) {
    total += calcChildren(i);
    console.log(
      `Day ${i}:  Parents: ${calcParents(i)}  Children: ${calcChildren(
        i
      )}, total: ${total}`
    );
  }
  return total;
};

console.log(totalGreenfly(28));
console.log(calcChildren(28));
console.log(calcParents(28));
