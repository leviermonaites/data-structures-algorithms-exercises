/*
In a party of N people, each person will shake her/his hand with each other person only once. On total how many hand-shakes would happen?
*/

const howManyShakedHands = (n) => {
  let shakedHands = 0;
  if (n <= 1) return (shakedHands = 0);
  else shakedHands = n - 1;

  return shakedHands + howManyShakedHands(shakedHands);
};

console.log(howManyShakedHands(4));
