// Most Asked Coding Interview Question

/*********************** Two Sum Problem ********************* */
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

let arr = [2, 7, 11, 15]; // it can be any array of integers 
let target = 7;

// Hash Map (complement lookup)
function twoSum(arr, target) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }
    return [];
}
console.log(twoSum(arr, target)); // Output: [0, 1]
// Time & Space complexity:
// Time: O(n) — single pass, each lookup/insert is O(1)
// Space: O(n) — in the worst case you store every element before finding the pair (or never finding one)

// brute force approach
function twoSumBruteForce(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(twoSumBruteForce(arr, target)); // Output: [0, 1]
// Time & Space complexity:
// Time: O(n^2) — nested loops
// Space: O(1) — no additional data structures used

// Two Pointer approach (only works if the array is sorted)
function twoSumTwoPointer(arr, target) {
    let sortedArr = arr.sort((a, b) => a - b); // Sort the array
    let left = 0;
    let right = sortedArr.length - 1;
    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum === target) {
            return [left, right]; // Return the indices of the two numbers
        } else if (sum < target) {
            left++; // Move the left pointer to the right
        } else {
            right--; // Move the right pointer to the left
        }
    }
    return [];
}
console.log(twoSumTwoPointer(arr, target)); // Output: [0, 1]
// Time & Space complexity:
// Time: O(n log n) — due to sorting, two-pointer traversal is O(n)
// Space: O(1) — if we ignore the space used for sorting (which can be O(n) in some implementations)



/*********************** Tower of Hanoi ********************* */
// The Tower of Hanoi is a mathematical puzzle where you have three rods and n disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:


/***********************Reverse the string *********************/

let string = "hello";
let reversedString = "";
for(let i = string.length - 1; i >= 0; i--){
  reversedString += string[i];
}
console.log(reversedString); // Output: "olleh"

/***************** Sort the Array without using the in built methods *************/
let arrToSort = [5, 2, 9, 1, 5, 6];
for(let i = 0; i < arrToSort.length; i++){
    for(let j = 0; j < arrToSort.length - i - 1; j++){
        if(arrToSort[j] > arrToSort[j + 1]){
            // Swap arrToSort[j] and arrToSort[j + 1]
            let temp = arrToSort[j];
            arrToSort[j] = arrToSort[j + 1];
            arrToSort[j + 1] = temp;
        }
    }
}
console.log(arrToSort);


/*******************  Flatten Object *********************/
// Write a function in JavaScript that flattens a deeply nested object. The output should be a single-level object where nested keys are represented in dot notation.

//TODO: visualize the proble and try to dry run and phesud code
const input = {
  a: {
    b: {
      c: 1
    },
    d: 2
  },
  e: 3
};

function flatten(obj){
    const result = {};
    function recurse(curr, prop) {
        if (Object(curr) !== curr) {
            result[prop] = curr;
        } else {
            for (let key in curr) {
                recurse(curr[key], prop ? prop + "." + key : key);
            }
        }
    }
    recurse(obj, "");
}

// output:
// {
//   "a.b.c": 1,
//   "a.d": 2,
//   "e": 3
// }