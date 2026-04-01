
// TODO: REVIEW ARRAYS in Js and Review the code as well

// ============================================================
// JavaScript equivalent of Python's `array` module
// JS uses typed arrays for fixed-type, memory-efficient arrays
// ============================================================

// Typed Arrays (equivalent to Python's array.array)
// 'i' (signed int)  → Int32Array
// 'd' (double)      → Float64Array
// 'u' (unicode)     → no direct typed array; use regular Array

let myarr  = new Int32Array([1, 2, 3, 4, 5]);
let myarr2 = new Float64Array([1, 2, 3, 4, 5]);
let myarr3 = ['a', 'b', 'c', 'd', 'e'];        // no typed array for chars

console.log(myarr);

// index-based loop
for (let i = 0; i < myarr.length; i++) {
    process.stdout.write(myarr[i] + "  ");
}
console.log();

// for-of loop
for (let x of myarr) {
    process.stdout.write(x + " , ");
}
console.log("\n");


// ── Array methods ────────────────────────────────────────────

// typecode equivalent → constructor name
console.log(myarr.constructor.name);   // Int32Array

// reverse the array (typed arrays support .reverse() in-place)
myarr.reverse();
console.log([...myarr].join(" , "));

// insert at index 2  (typed arrays are fixed-size → convert to regular Array)
let arr = Array.from(myarr);
arr.splice(2, 0, 10);                  // splice(index, deleteCount, value)
myarr = new Int32Array(arr);
console.log([...myarr].join(" , "));

// append to end
arr = Array.from(myarr);
arr.push(20);
myarr = new Int32Array(arr);
console.log([...myarr].join(" , "));

// replace value at index 2
myarr[2] = 15;
console.log([...myarr].join(" , "));

// copy array with transformation (each element × 2)
let copyArray = new Int32Array([...myarr].map(x => x * 2));
console.log([...copyArray].join(" , "));

// pop at index 2
let copyArr = Array.from(copyArray);
copyArr.splice(2, 1);                  // remove 1 element at index 2
// pop last element
copyArr.pop();
copyArray = new Int32Array(copyArr);
console.log([...copyArray].join(" , "));

// remove first occurrence of value 20
copyArr = Array.from(copyArray);
const idx = copyArr.indexOf(20);
if (idx !== -1) copyArr.splice(idx, 1);
copyArray = new Int32Array(copyArr);
console.log([...copyArray].join(" , "));


// ── Slicing ──────────────────────────────────────────────────

// myarr[1:4]  → indices 1, 2, 3
let newArr = myarr.slice(1, 4);
console.log([...newArr].join(" , "));

// myarr[1:-3] → from index 1 to (length - 3)
newArr = myarr.slice(1, myarr.length - 3);
console.log([...newArr].join(" , "));

// myarr[::-1] → full reverse copy
newArr = myarr.slice().reverse();
console.log([...newArr].join(" , "));


// ── Dynamic array from user input ────────────────────────────
// (Node.js: use readline; in browser use prompt())
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the number of elements: ", (n) => {
    n = parseInt(n);
    let userArr = [];
    let count = 0;

    const askElement = () => {
        rl.question("Enter element: ", (val) => {
            userArr.push(parseInt(val));
            count++;
            if (count < n) {
                askElement();
            } else {
                console.log(userArr.join("  "));

                // ── Search: index of a value ─────────────────────────────
                const searchArr = [1, 2, 3, 4, 5];
                const foundIdx = searchArr.indexOf(3);   // -1 if not found
                console.log("\nIndex of 3 is:", foundIdx);

                rl.close();
            }
        });
    };
    askElement();
});






// ============================================================
// ============================================================
// JavaScript equivalent of Python's `numpy` module
// JS has no numpy; we replicate behavior manually or via math
// ============================================================


// ── Basic array creation ─────────────────────────────────────

// array([1,2,3,4,5,4.5])  → JS infers float automatically
let arr = [1, 2, 3, 4, 5, 4.5];

// array([1,2,3,4,5], float) → explicitly convert to floats
arr = [1, 2, 3, 4, 5].map(Number);

// array([1,2,3,4,5,"a"])  → JS converts everything to strings
arr = [1, 2, 3, 4, 5, "a"].map(String);

for (let x of arr) process.stdout.write(x + " ");
console.log();


// ── linspace(start, stop, num) ───────────────────────────────
// num evenly spaced values; both endpoints included
function linspace(start, stop, num) {
    if (num === 1) return [start];
    const step = (stop - start) / (num - 1);
    return Array.from({ length: num }, (_, i) => start + i * step);
}

arr = linspace(10, 20, 6);
console.log(arr);   // [10, 12, 14, 16, 18, 20]


// ── arange(start, stop, step) ────────────────────────────────
// stop is excluded (like Python's range)
function arange(start, stop, step = 1) {
    const result = [];
    for (let i = start; i < stop; i += step) result.push(i);
    return result;
}

arr = arange(10, 15, 1);
console.log(arr);   // [10, 11, 12, 13, 14]


// ── logspace(start, stop, num) ───────────────────────────────
// num values evenly spaced on a log10 scale: 10^start … 10^stop
function logspace(start, stop, num) {
    return linspace(start, stop, num).map(x => Math.pow(10, x));
}

arr = logspace(10, 20, 2);
console.log(arr);   // [1e10, 1e20]


// ── zeros / ones / full ──────────────────────────────────────

const zerosArr = new Array(10).fill(0);
const onesArr  = new Array(10).fill(1);
const foursArr = new Array(10).fill(4);

console.log(zerosArr.join(" "));
console.log(onesArr.join(" "));
console.log(foursArr.join(" "));


// ── Multi-dimensional arrays ─────────────────────────────────

// 0-D  (scalar)
const zeroD = 10;
console.log(zeroD);

// 1-D
const oneD = [1, 2, 3, 4, 5];
console.log(oneD);

// 2-D  (array of 1-D arrays)
const twoD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoD);

// 3-D  (array of 2-D arrays)
const threeD = [
    [
        [1,  2,  3],
        [4,  5,  6],
        [7,  8,  9]
    ],
    [
        [10, 11, 12],
        [13, 14, 15],
        [16, 17, 18]
    ]
];
console.log(threeD);