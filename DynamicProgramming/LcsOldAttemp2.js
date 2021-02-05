/* 
The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences). 
It differs from the longest common substring problem: unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences. 
The longest common subsequence problem is a classic computer science problem, the basis of data comparison programs such as the diff utility, and has applications in computational linguistics and bioinformatics.
It is also widely used by revision control systems such as Git for reconciling multiple changes made to a revision-controlled collection of files.

For example, consider the sequences (ABCD) and (ACBAD). They have 5 length-2 common subsequences: (AB), (AC), (AD), (BD), and (CD); 2 length-3 common subsequences: (ABD) and (ACD); and no longer common subsequences.
So (ABD) and (ACD) are their longest common subsequences.
*/

const lcs = (firstString, secondString) => {
  const firstStringObject = {};
  const map = Array.prototype.map;
  map.call(firstString, (value, index) => {
    for (let i = index + 1; i < firstString.length; i++) {
      const stringMountedTwoLetters = `${value}${firstString[i]}`;
      firstStringObject[stringMountedTwoLetters.length] =
        typeof firstStringObject[stringMountedTwoLetters.length] === typeof []
          ? [
              ...firstStringObject[stringMountedTwoLetters.length],
              stringMountedTwoLetters,
            ]
          : [stringMountedTwoLetters];

      if (i - index > 1 && i < firstString.length) {
        const stringMounted = firstString.slice(index, i + 1);
        firstStringObject[stringMounted.length] =
          typeof firstStringObject[stringMounted.length] === typeof []
            ? [...firstStringObject[stringMounted.length], stringMounted]
            : [stringMounted];

        for (let loopTime = i; loopTime < firstString.length; loopTime++) {
          firstStringObject[`${loop}`] =
            typeof firstStringObject[stringMountedTwoLetters.length] ===
            typeof [...firstStringObject[stringMountedTwoLetters.length], firstString.slice()]
              ? []
              : '';
        }
      }
    }
  });

  console.log(firstStringObject);
};

console.log(lcs('asdab', 'adab'));
