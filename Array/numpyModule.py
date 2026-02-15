# in this we learn how to use the numpy module 
# in this we learn about numpy module

# lets create a array using the python numpy module 
# import numpy as np
from numpy import *

# arr = array([1,2,3,4,5,4.5])
# arr = array([1,2,3,4,5],float)
# arr = array([1,2,3,4,5,"a"])

# for x in arr:
#     print(x, end=" ")

# arr = linspace(10,15,6)  # 10 and 15 is included 
# arr = arange(10,15,1)      # 10 is inclued but the 15 is excluded
arr = logspace(10,20,2)     # this print in the termian e raise to the power
zerosArr = zeros(10)
onesArr = ones(10)
foursArr = full(10, 4)
# for x in arr:
#     print(x, end=" ")

for x in zerosArr:
    print(x, end=" ")

print("\n")    
for x in onesArr:
    print(x, end=" ")

print("\n")

for x in foursArr:
    print(x, end=" ")

print("\n")
# we can build multiple dimesion array 
two = array([[1,2,3], [4,5,6], [7,8,9]])

print(two)