const fact = (n, numbers = new Array(n + 1)) => {
  let sum = 0;

  // We set the "first" index as 1, because as the recursion occurs,
  // in some point it is going to reach 1
  // and if it is null, the result is going to be zero ever.
  numbers[1] = 1;

  for (let i = n - 1; i >= 1; i--) {
    if (!numbers[i]) numbers[i] = fact(i, numbers);
    sum += n * numbers[i];
  }

  return sum;
};

console.log(fact(4));
