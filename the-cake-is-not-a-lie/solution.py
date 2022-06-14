def solution(s):
  strLen = len(s)
  if strLen <= 0:
    return 0
  for i in range(1, strLen+1):
    if strLen % i == 0:
      substr = s[:i]
      denom = s.count(substr)
      if denom*i == strLen:
        return denom

print("Test case 1 : ")
print(solution("abccbaabccba"))

print("\nTest case 2 : ")
print(solution("abcabcabcabc"))

print("\nTest case 3 : ")
print(solution("a"))

print("\nTest case 4 : ")
print(solution(""))