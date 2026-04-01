# Time Complexity Examples

# Constant Time Complexity = O(1) program example
x = 5
print(x)

if (x == 5):
    print("hello")
else:
    print("world")

# Linear Time Complexity = O(n) program example    
x = 5 
for i in range(0, x):
    print(i)

# Quadratic Time Complexity = O(n^2) program example
x = 5
for i in range(0, x):
    for j in range(0, x):
        print("hello")

for k in range(0, x):
    print("world")

# Cubic Time Complexity = O(n^3) program example
n = 5
m = 10
for i in range(0, n):             # this loop run n times
    for j in range(0, m):         # this loop run m times
        for k in range(0, n):     # this loop run n times
            print("hello")        # this loop run n * m * n times = O(n^2 * m) = O(n^3) 

# Logarithmic Time Complexity = O(log n) program example     
n =10 
while(n >= 1): 
    print("hello")
    n = n // 2      
