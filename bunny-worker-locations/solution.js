const solution = (x, y) => {
  const id = (((x + y - 1) * (x + y - 2) / 2) + x).toString();
  return id;
}

console.log("Test case 1 : ");
console.log(solution(1,1));

console.log("Test case 2 : ");
console.log(solution(3,2));

console.log("Test case 3 : ");
console.log(solution(5,10));