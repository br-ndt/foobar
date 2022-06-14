const solution = (string) => {
  let max = 1;
  let length = string.length;
  if (!length) return 0;
  for (let i = 0; i <= length; ++i) {
    if (length % i === 0) {
      let substring = "";
      for (let j = 0; j < length / i; ++j) {
        substring += string[j];
      }
      let checkString = "";
      for (let k = 0; k < i; ++k) {
        checkString += substring;
      }
      if (checkString === string) {
        max = i;
      }
    }
  }
  return max;
};

console.log("Test case 1 : ");
console.log(solution("abcabcabcabc"));

console.log("Test case 2 : ");
console.log(solution("abccbaabccba"));

console.log("Test case 3 : ");
console.log(solution("aba"));

console.log("Test case 4 : ");
console.log(solution("a"));

console.log("Test case 5 : ");
console.log(solution("aa"));

console.log("Test case 6 : ");
console.log(solution(""));
