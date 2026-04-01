// Time Complexity Examples in JavaScript

// Constant Time Complexity = O(1)
let x = 5;
console.log(x);

if (x === 5) {
  console.log("hello");
} else {
  console.log("world");
}

// Linear Time Complexity = O(n)
x = 5;
for (let i = 0; i < x; i++) {
  console.log(i);
}

// Quadratic Time Complexity = O(n^2)
x = 5;
for (let i = 0; i < x; i++) {
  for (let j = 0; j < x; j++) {
    console.log("hello");
  }
}

for (let k = 0; k < x; k++) {
  console.log("world");
}

// Cubic Time Complexity = O(n^3) (or O(n^2 * m))
const n = 5;
const m = 10;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    for (let k = 0; k < n; k++) {
      console.log("hello");
    }
  }
}

// Logarithmic Time Complexity = O(log n)
let N = 10;
while (N >= 1) {
  console.log("hello");
  N = Math.floor(N / 2);
}
