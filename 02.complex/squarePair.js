const squarePair = (n) => {
  let x = n.length;
  console.log(n[1]);
  console.log(x);
  for (i = 0; i <= (x * (x - 1)) / 2; i++) {
    for (j = 0; j <= (x * (x - 1)) / 2; j++) {
      sum = n[i] + n[j];
      squareRoot = Math.sqrt(sum);
      if (Number.isInteger(squareRoot) == true) {
        if (n[i] < n[j]) {
          console.log('Square Pairs:', new Array(n[i], n[j]));
        }
      }
    }
  }
};

squarePair([11, 5, 4, 20]);
