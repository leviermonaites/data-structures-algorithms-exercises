/* 
The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences (often just two sequences). 
It differs from the longest common substring problem: unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences. 
The longest common subsequence problem is a classic computer science problem, the basis of data comparison programs such as the diff utility, and has applications in computational linguistics and bioinformatics.
It is also widely used by revision control systems such as Git for reconciling multiple changes made to a revision-controlled collection of files.

For example, consider the sequences (ABCD) and (ACBAD). They have 5 length-2 common subsequences: (AB), (AC), (AD), (BD), and (CD); 2 length-3 common subsequences: (ABD) and (ACD); and no longer common subsequences.
So (ABD) and (ACD) are their longest common subsequences.
*/

const lcs = (firstString, secondString) => {
  let lcsArray = new Array(
    firstString.length < secondString.length
      ? firstString.length
      : secondString.length
  );

  const firstStringSequences = {};

  const commonSequences = [];

  for (let i = 0; i < firstString.length * firstString.length; i++) {
    if (i <= firstString.length) {
      const map = Array.prototype.map;
      map.call(firstString, (value, index) => {
        if (index <= i) return;
        const stringMounted = `${firstString[i]}${value}`;
        firstStringSequences[stringMounted.length] =
        typeof firstStringSequences[stringMounted.length] === typeof []
        ? [...firstStringSequences[stringMounted.length], stringMounted]
        : [stringMounted];
      });
    }
    
    if (i > firstString.length) {
      console.log(i);
      console.log(firstString.length);
      const map = Array.prototype.map;''
      map.call(firstString, (value, index) => {
        if (i / firstString.length >= index) return;
        console.log('Hello');
        console.log(index);
        // const stringMounted = `${firstString.slice(
        //   i - firstString.length,
        //   index
        // )}`;
        // firstStringSequences[stringMounted.length] =
        //   typeof firstStringSequences[stringMounted.length] === typeof []
        //     ? [...firstStringSequences[stringMounted.length], stringMounted]
        //     : [stringMounted];
      });
    }
  }

  return firstStringSequences;
};

console.log(lcs('asdab', 'adab'));
