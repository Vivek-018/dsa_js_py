class Node:
    def __init__(self,value = None):
        self.data = value
        self.next = None
        self.prev = None

class DoublyLL:
    def __init__(self):
        self.head = None        

    # insertion at the end
    def insertAtEnd(self,value):
        temp = Node(value)
        if(self.head == None):
            self.head = temp
            return
        
        t = self.head
        while (t.next != None):
            t= t.next
        t.next = temp
        temp.prev = t

    # insertion at the beginning
    def insertAtBeg(self,value):
        temp = Node(value)
        if(self.head == None):
            self.head = temp
            return
        
        temp.next = self.head
        self.head.prev = temp
        self.head = temp 

    # insertion at middle
    def insertAtMid(self,value,x):
        t = self.head

        while(t.next != None):
            if(t.data == x):
                break
            else:
                t = t.next

        temp = Node(value)     
        temp.next = t.next
        t.next.prev = temp

        t.next = temp
        temp.prev = t
         

    # deletion 
    def deletionLL(self,value):
        if(self.head == None):
            print("Linked List is empty")
            return
        
        t = self.head
        # begining
        if(t.data == value):
            self.head = t.next
            self.head.prev = None
            return 
        # middle
        while(t.next != None):
            if(t.data == value):
                t.prev.next = t.next
                t.next.prev = t.prev
                return
            else:
                t = t.next
        if(t.data == value):
            t.prev.next = None

    # print the linked list 
    def printDLL(self): 
        t1 =  self.head
        while(t1.next != None):
            print(t1.data , end=" <--> ")
            t1 = t1.next
        print(t1.data)

obj = DoublyLL()
obj.insertAtEnd(10)
obj.insertAtEnd(20)
obj.insertAtEnd(30)
obj.insertAtEnd(40)
obj.insertAtBeg(5)
obj.insertAtMid(50,20)
obj.deletionLL(5)
obj.deletionLL(50)
obj.deletionLL(40)
obj.printDLL()        