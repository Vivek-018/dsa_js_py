class Queue {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    insert(value) {
        this.items.push(value);
    }

    delete() {
        if (this.isEmpty()) {
            console.log("Queue is empty")
        } else {
            return this.items.shift()
        }
    }
}

const q = new Queue();
q.insert(10)
q.insert(20)
q.insert(30)

console.log(q.delete())
console.log(q.delete())
console.log(q.delete())
q.delete()