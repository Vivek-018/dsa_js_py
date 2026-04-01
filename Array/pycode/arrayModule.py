# in this we learn about differen method of array 
# and how many operation and use case we can perform using the array 
# in this we learn about array module


############# three ways to import array module
# from array import *
# import array 
import array as arr

# learn multiple arr method 
# reverse() , insert() , pop() , remove() , count() , index() , extend() , copy() , clear() , fromlist() , tolist() , buffer_info() , frombytes() , tostring() 

myarr = arr.array('i', [1, 2, 3, 4, 5])
print(myarr)


# print in single line 
for i in myarr:
    print(i, end="  ")
print()
