const squarePair = (n) => {
  let x = n.length;
  if (x > 1) {
    for (i = 0; i <= x; i++) {
      for (j = 0; j <= x; j++) {
        sum = n[i] + n[j];
        squareRoot = Math.sqrt(sum);
        if (Number.isInteger(squareRoot) == true) {
          if ((n[i] < n[j]) & (n[i] > 0) & (n[j] > 0)) {
            console.log('Square Pairs:', new Array(n[i], n[j]));
          }
        }
      }
    }
  } else {
    return false;
  }
};

squarePair([9, 0, 2, -5, 7]);
