// Problem-1: Sum of array elements eq: [1,2,3,4,5]
// iterative approach
function sum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
// console.log(sum([1,2,3,4,5]));

// recursive approach
function sumRecursive(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumRecursive(arr.slice(1));
}
// console.log(sumRecursive([1,2,3]));

// ########################################################################################################
// Problem-2: Reverse the string eq: hello -> olleh
// iterative approach
function reverse(str) {
    let revStr = '';
    for (let char of str) {
        revStr = char + revStr;
    }
    return revStr;
}
// console.log(reverse("hello"));

// recursive approach
function reverseRecursive(s) {
    if (s.length <= 0) {
        return "";
    }
    return reverseRecursive(s.slice(1)) + s[0];
}
// console.log(reverseRecursive("hello"));

// #########################################################################################################
// Problem-3: factorial of a number eq: 5! = 5*4*3*2*1

// iterative approach
function fact(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(fact(5));

// recursive approach
function factRecursive(n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factRecursive(n - 1);
}
console.log(factRecursive(4));

// #########################################################################################################
// Problem: 4 count good numbers    leetcode




// ########################################################################################################
// Problem: 5 Generate Valid Parentheses eq: ()()(()()) leetcode
// parentheses ()
// brackets []
// braces {}
class Solution {
    generateParenthesis(n) {
        let result = [];

        function doitagain(current, openLeft, closeLeft) {
            // base case
            if (openLeft === 0 && closeLeft === 0) {
                result.push(current);
                return;
            }

            if (openLeft > 0) {
                doitagain(current + '(', openLeft - 1, closeLeft);
            }

            if (closeLeft > openLeft) {
                doitagain(current + ')', openLeft, closeLeft - 1);
            }
        }

        doitagain("", n, n);
        return result;
    }
}

// ########################################################################################################
// Problem: 6  letter combinations of a phone number Leetcode
class Solution {
    letterCombinations(digits) {
        if (!digits) {
            return [];
        }

        const phoneMap = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        };

        let result = [];
        function backtrack(index, current) {
            // base case
            if (index === digits.length) {
                result.push(current);
                return;
            }
            for (let char of phoneMap[digits[index]]) {
                backtrack(index + 1, current + char);
            }
        }

        backtrack(0, "");
        return result;
    }
}

// ########################################################################################################
// Problem: 7  Sum Combinations Leetcode
class Solution {
    combinationSum(candidates, target) {
        let result = [];

        function backtrack(start, current, total) {
            // base case
            if (total === target) {
                result.push([...current]);
                return;
            }
            if (total > target) {
                return;
            }

            for (let i = start; i < candidates.length; i++) {
                current.push(candidates[i]);
                backtrack(i, current, total + candidates[i]);
                current.pop();
            }
        }

        backtrack(0, [], 0);
        return result;
    }
}