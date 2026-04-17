class Stack {
  constructor() {
    this.stk = []
  }

  isEmpty() {
    return (this.stk.length === 0)
  }

  length() {
    return this.stk.length
  }

  peek() {
    if (this.stk.length === 0) {
      throw new Error("Stack is Empty!")
    } else {
      return this.stk[(this.stk.length - 1)]
    }
  }

  pop() {
    if (this.stk.length === 0) {
      throw new Error("Stack is Empty!")
    } else {
      return this.stk.pop()
    }
  }

  push(value) {
    return this.stk.push(value)
  }

}

const myStack = new Stack()
console.log("myStack:", myStack);
console.log("isEmpty:", myStack.isEmpty())
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log("check Stack:", myStack.peek())
myStack.push(40);
console.log("pop element:",myStack.pop())
console.log("Stack Length:",myStack.length())
console.log("updated Stack:", myStack)