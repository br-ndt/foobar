def solution(x, y):
  intAnswer = ((x + y - 1) * (x + y - 2) / 2) + x
  return str(intAnswer)

print("Test case 1 : ")
print(solution(1, 1))

print("\nTest case 2 : ")
print(solution(3, 2))

print("\nTest case 3 : ")
print(solution(5, 10))