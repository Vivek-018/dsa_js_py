# Problem-1: Sum of array elements eq: [1,2,3,4,5]
# iterative approach 
def sum(arr):
    total = 0
    # for i in range(0,len(arr)):
    #     total = total + arr[i]
    for num in arr:
        total = total + num
    
    return total
# print(sum([1,2,3,4,5]))

# recursive approach 
def sum_recursive(arr):
    if not arr:
        return 0
    return arr[0] + sum_recursive(arr[1:])
# print(sum_recursive([1,2,3]))

########################################################################################################
# Problem-2: Reverse the string eq: hello -> olleh
# iterative approach
def reverse(string):
    revStr = ''
    for char in string:
        revStr = char + revStr
    return revStr
# print(reverse("hello"))  

# recursive approach
def reverse_recursive(s):
    if len(s) <= 0:
        return ""
    return reverse_recursive(s[1:]) + s[0]
# print(reverse_recursive("hello"))

#########################################################################################################
# Problem-3: factorial of a number eq: 5! = 5*4*3*2*1

# iterative approach
def fact(n):
    result = 1
    for i in range(1,n+1):
        result *= i
    return result
print(fact(5))
        
# recursive approach
def fact_recursive(n):
    if n==1 or n==1:
      return 1
    return n * fact_recursive(n-1)
print(fact_recursive(4))

#########################################################################################################
# Problem: 4 count good numbers    leetcode
 



########################################################################################################
# Problem: 5 Generate Valid Parantheses eq: ()()(()()) leetcode
# parathese ()
# brackets []
# braces {}
from typing import List
class Solution:
      def generateParenthesis(self, n: int) -> List[str]:
          result = []

          def doitagain(current:str,open_left:int,close_left:int):
              # base case
              if open_left == 0 and close_left == 0:
                  result.append(current)
                  return
              
              if open_left > 0:
                  doitagain(current + '(',open_left -1,close_left)

              if close_left > open_left:
                  doitagain(current + ')',open_left,close_left - 1)

          doitagain("",n,n)
          return result
    
########################################################################################################
# Problem: 6  letter combinations of a phone number Leetcode
from typing import List
class Solution:
     def letterCombinations(self, digits: str) -> List[str]:
          if not digits:
                 return []
          
          phone_map = {
                '2': 'abc',
                '3': 'def',
                '4': 'ghi',
                '5': 'jkl',
                '6': 'mno',
                '7': 'pqrs',
                '8': 'tuv',
                '9': 'wxyz'
          }

          result = []
          def backtrack(index:int,current:str):
               # base case
               if index == len(digits):
                    result.append(current)
                    return
               for char in phone_map[digits[index]]:
                    backtrack(index + 1,current + char)
          
          backtrack(0,"")
          return result


########################################################################################################
# Problem: 6  letter combinations of a phone number Leetcode
from typing import List
class Solution:
     def letterCombinations(self, digits: str) -> List[str]:
          if not digits:
                 return []
          
          phone_map = {
                '2': 'abc',
                '3': 'def',
                '4': 'ghi',
                '5': 'jkl',
                '6': 'mno',
                '7': 'pqrs',
                '8': 'tuv',
                '9': 'wxyz'
          }

          result = []
          def backtrack(index:int,current:str):
               # base case
               if index == len(digits):
                    result.append(current)
                    return
               for char in phone_map[digits[index]]:
                    backtrack(index + 1,current + char)
          
          backtrack(0,"")
          return result
     
########################################################################################################
# Problem: 7  Sum Combinations Leetcode
from typing import List
class Solution:
       
       def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]: 
            result = []

            def backtrack(start:int,current:List[int],total:int):
                 # base case 
                 if total == target:
                        result.append(list(current))
                        return
                 if total > target:
                      return

                 for i in range(start,len(candidates)):
                      current.append(candidates[i])
                      backtrack(i,current,total + candidates[i])
                      current.pop()
                     
            backtrack(0,[],0)
            return result