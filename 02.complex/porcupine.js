const nextPrime = (n) => {
  var N = n + 1;
  while (true) {
    var flag = 0;
    for (let i = 2; i <= N / 2; i++) {
      if (N % i == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      return N;
    }
    N++;
  }
};

const findPorcupine = (n) => {
  var prime;
  while (true) {
    prime = nextPrime(n);
    let newPrime = prime;
    if (prime % 10 == 9) {
      newPrime = nextPrime(prime);
      if (newPrime % 10 == 9) {
        console.log(
          `${prime} is the pocupine number because the last digit of next prime ${newPrime} is 9`
        );
        break;
      }
    }
    n = newPrime;
  }
};
findPorcupine(409);
