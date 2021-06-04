/*
    This is the best approach, because it doesn't struggle with recursion calls.
    We have sort of like a limit of calls in our recursives functions, but here we don't have this problem anymore, try this function with huge numbers, and then try to do the same in recursive approach!
*/

const fibBottomUp = (n) => {
  if (n == 1 || n == 2) return 1;
  const bottomUp = new Array(n + 1);
  bottomUp[1] = 1;
  bottomUp[2] = 1;
  for (let i = 3; i <= n; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }
  return bottomUp[n];
};

console.log(fibBottomUp(1000));
