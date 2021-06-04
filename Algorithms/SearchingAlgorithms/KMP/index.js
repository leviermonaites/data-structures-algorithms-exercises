const kmp = (str, pat) => {
  if (str.length < 1 && pat.length > 0) return 0;
  let matches = 0;
  const lps = new Array(pat.length);

  let [i, j] = [0, 1];
  lps[0] = 0;
  while (j < pat.length) {
    if (pat[i] !== pat[j]) {
      if (i - 1 >= 0) {
        i = pat[i - 1];
      } else i = 0;
      if (pat[i] !== pat[j]) {
        lps[j] = 0;
      }
    } else {
      lps[j] = i + 1;
      i++;
    }
    j++;
  }

  [i, j] = [0, 0];

  while (i <= str.length) {
    if (!pat[j]) {
      matches++;
      j = 0;
    }

    if (str[i] !== pat[j]) {
      if (j > 0) {
        j = lps[j - 1];
        if (str[i] !== pat[j]) {
          j = lps[j];
        } else j++;
      }
    } else {
      j++;
    }

    i++;
  }

  return matches;
};

console.log(kmp("adsgwadsxdsgwadsgz", "dsgwadsgz"));
console.log(kmp("ABABDABACDABABCABAB", "ABABCABAB"));
// console.log(kmp("bbaba", "a"));
