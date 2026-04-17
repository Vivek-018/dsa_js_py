class stack:
    def __init__(self):
        self.s = []

    def length(self):
        return len(self.s)
    
    def push(self,value):
        self.s.insert(0,value)
    
    def pushAppend(self,value):
        self.s.append(value)

    def peek(self):
        if(len(self.s) == 0):
            raise Exception("Stack is Empty!")
        else:
            return self.s[0]
        
    def peek2(self):
        if(len(self.s) == 0):
            raise Exception("Stack is Empty!")
        else:
            return self.s[len(self.s)-1]
        
    def pop(self):
        if(len(self.s) == 0):
            raise Exception("Stack is Empty!")
        else:
            return self.s.pop(0)
        
    def popUsingPop(self):
        if(len(self.s) == 0):
            raise Exception("Stack is Empty!")
        else:
            return self.s.pop()
        
    
# stk = stack()
# stk.push(10)
# stk.push(20)
# stk.push(30)
# # print(stk.peek())
# print(stk.pop())
# print(stk.pop())
# print(stk.pop())


stk2 = stack()
stk2.pushAppend(10)
stk2.pushAppend(20)
stk2.pushAppend(30)
print(stk2.peek2())
print(stk2.popUsingPop())
print(stk2.popUsingPop())
print(stk2.popUsingPop())