const naiveStringSearch = (strParam = "", strToBeFoundParam = "") => {
  const str = strParam.toLowerCase();
  const toBeFound = strToBeFoundParam.toLowerCase();
  if (str.length < 1 && toBeFound.length > 0) return 0;
  let matches = 0;
  for (let i = 0; i < str.length; i++) {
    if (toBeFound[0] === str[i]) {
      for (let j = 0; j < toBeFound.length; j++) {
        if (toBeFound[j] !== str[i + j]) break;
        if (!toBeFound[j + 1]) matches++;
      }
    }
  }
  return matches;
};

console.log(naiveStringSearch("ermonaites", "nai"));

// T = O(mn);
