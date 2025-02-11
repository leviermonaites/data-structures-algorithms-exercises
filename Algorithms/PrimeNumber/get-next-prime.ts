import { isPrime } from './is-prime';

export const getNextPrime = (n: number) => {
  // Base case
  if (n <= 1)
    return 2;

  let prime: number = n;
  let found: boolean = false;

  // Loop continuously until isPrime returns
  // true for a number greater than n
  while (!found) {
    prime++;

    if (isPrime(prime))
      found = true;
  }

  return prime;
}