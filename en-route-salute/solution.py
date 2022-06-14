def solution (string):
  answer = count = 0
  for char in string:
    if char == "<":
      answer += count
    elif char == ">":
      count += 2
  return answer

print("Test case 1 : ")
print(solution(">----<"))

print("Test case 2 : ")
print(solution("<<>><"))