// This example assumes just positive numbers.
const power = (base, exp) => (exp < 1 ? 1 : base * power(base, exp - 1));
