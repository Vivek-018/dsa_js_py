# learn about different method of array 
# operation and use case we can perform using the array 
# learn about array module

# 3 different way to import array module
import array 
# import array as arr
# from array import *

myarr = array.array('i', [1, 2, 3, 4, 5])
myarr2 = array.array('d', [1, 2, 3, 4, 5])
myarr3 = array.array('u', ['a', 'b', 'c', 'd', 'e'])

print(myarr)

for i in range(0, len(myarr)):
    print(myarr[i], end="  ")

print("\n")

for x in myarr:
    print(x, end=" , ")

print("\n")

# learn multiple array method 

# to find typeCode of the array
print(myarr.typecode)

# to reverse the array
myarr.reverse()
for x in myarr:
    print(x, end=" , ")

# insertion in the array
myarr.insert(2, 10)
for x in myarr:
    print(x, end=" , ")

# insert at the end of the array
myarr.append(20)
for x in myarr:
    print(x, end=" , ")

# replace the value in the array
myarr[2] = 15
for x in myarr:
    print(x, end=" , ")

# copy the array
copyArray = array.array(myarr.typecode, ( x*2 for x in myarr))
for x in copyArray:
    print(x, end=" , ")

# delete the value at the index from the array
copyArray.pop(2)  # this will delete the value at index 2
copyArray.pop()  #  this will delete the last value from the array
for x in copyArray:
    print(x, end=" , ")


# delete the value from the array
copyArray.remove(20)  # this will delete the value 20 from the array
for x in copyArray:
    print(x, end=" , ")


# new array from the existing array slicing
newArr = myarr[1:4]  # this will create a new array from index 1 to index 3
newArr = myarr[1:-3]  # this will create a new array from index 1 to index -4
newArr = myarr[::-1]  # this will create a new array in reverse order
for x in newArr:
    print(x, end=" , ")


# create dynamic array using the user input
userArr = array.array('i', [])
n = int(input("Enter the number of elements in the array: "))

for i in range(0,n):
    userArr.append(int(input("Enter the element: ")))


for x in userArr:
    print(x, end="  ")

# search index of the value in the array
searchArr = array.array('i', [1, 2, 3, 4, 5])
i = searchArr.index(3)  # this will return the index of the value 3 in the array
print("\nIndex of 3 is: ", i)