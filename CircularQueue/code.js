class CircularQueue {
    constructor(size) {
        this.size = size
        this.items = new Array(size).fill(null)
        this.front = this.rear = -1
    }

    // insert value in queue
    enqueue(value) {
        if (((this.rear + 1) % this.size) === this.front) {
            console.log("Queue is Full")
        } else if (this.front === -1) {
            this.front = this.rear = 0
            this.items[this.rear] = value
        } else {
            this.rear = (this.rear + 1) % this.size
            this.items[this.rear] = value
        }
    }

    // delete value from queue
    dequeue() {
        if (this.front === -1) {
            console.log("Queue is empty")
        } else if (this.front === this.rear) {
            // when the only one element in queue
            console.log(this.items[this.front])
            this.front = this.rear = -1
        } else {
            console.log(this.items[this.front])
            this.front = (this.front + 1) % this.size
        }
    }
}

const cq = new CircularQueue(4);
cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)
cq.enqueue(50)
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()
cq.dequeue()