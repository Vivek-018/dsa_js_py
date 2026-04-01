# numpy module

# array using numpy module
# import numpy as np
from numpy import *

arr = array([1,2,3,4,5,4.5])
arr = array([1,2,3,4,5],float)
arr = array([1,2,3,4,5,"a"])

for x in arr:
    print(x, end=" ") 

# create a array with the specified range arithmetic progression
arr = linspace(10,20,6)  # 10 and 20 is included 

# create a array with the specified range arithmetic progression
arr = arange(10,15,1)    # 10 is inclued but the 15 is excluded

# create a array with the specified range geometric progression
arr = logspace(10,20,2) # this print in the term e raise to the power

# create array single dimension array with the specified value
zerosArr = zeros(10)
onesArr = ones(10)
foursArr = full(10, 4)  # this will create an array of size 10 and fill it with the value 4

for x in zerosArr:
    print(x, end=" ")

print("\n")    

for x in onesArr:
    print(x, end=" ")

print("\n")

for x in foursArr:
    print(x, end=" ")

print("\n")

# multi dimensional array
zeroD = array(10)
print(zeroD)

oneD = array([1,2,3,4,5])
print(oneD)

twoD = array([[1,2,3], [4,5,6], [7,8,9]]) # collection of 1D array is called 2D array
print(twoD)

threeD = array([[[1,2,3], [4,5,6], [7,8,9]], [[10,11,12], [13,14,15], [16,17,18]]]) # collection of 2D array is called 3D array
print(threeD)