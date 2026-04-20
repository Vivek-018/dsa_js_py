// Double Ended Queue (Deque)
class Deque {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0;
    }

    deleteAtFront() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        } else {
            return this.items.shift()
        }
    }

    deleteAtEnd() {
        if (this.isEmpty()) {
            console.log("Queue is Empty!");
        } else {
            return this.items.pop();
        }
    }

    insertAtEnd(value) {
        this.items.push(value);
    }

    insertAtFront(value) {
        this.items.unshift(value)
    }
}

const dq = new Deque()
dq.insertAtEnd(10)
dq.insertAtFront(20)
dq.insertAtFront(40)

console.log(dq.deleteAtEnd())
console.log(dq.deleteAtEnd())
console.log(dq.deleteAtEnd())
dq.deleteAtEnd()