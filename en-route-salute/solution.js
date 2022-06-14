const solution = (string) => {
  let answer = 0;
  let count = 0;
  for(const char of string) {
    if(char === '<') {
      answer += count;
    } else if (char === '>') {
      count += 2;
    }
  }
  return answer;
}

console.log("Test case 1 : ");
console.log(solution(">----<"));

console.log("Test case 2 : ");
console.log(solution("<<>><"));