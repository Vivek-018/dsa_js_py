class Node {
    constructor(value = null) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLL {
    constructor() {
        this.head = null;
    }

    // insertion at the end
    insertAtEnd(value) {
        const temp = new Node(value);
        if (this.head === null) {
            this.head = temp;
            return;
        }

        let t = this.head;
        while (t.next !== null) {
            t = t.next;
        }
        t.next = temp;
        temp.prev = t;
    }

    // insertion at the beginning
    insertAtBeg(value) {
        const temp = new Node(value);
        if (this.head === null) {
            this.head = temp;
            return;
        }

        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }

    // insertion at middle
    insertAtMid(value, x) {
        let t = this.head;

        while (t.next !== null) {
            if (t.data === x) {
                break;
            } else {
                t = t.next;
            }
        }

        const temp = new Node(value);
        temp.next = t.next;
        t.next.prev = temp;

        t.next = temp;
        temp.prev = t;
    }

    // deletion
    deletionLL(value) {
        if (this.head === null) {
            console.log("Linked List is empty");
            return;
        }

        let t = this.head;

        // beginning
        if (t.data === value) {
            this.head = t.next;
            this.head.prev = null;
            return;
        }

        // middle
        while (t.next !== null) {
            if (t.data === value) {
                t.prev.next = t.next;
                t.next.prev = t.prev;
                return;
            } else {
                t = t.next;
            }
        }

        // end
        if (t.data === value) {
            t.prev.next = null;
        }
    }

    // print the linked list
    printDLL() {
        let t1 = this.head;
        while (t1.next !== null) {
            process.stdout.write(t1.data + " <--> ");
            t1 = t1.next;
        }
        console.log(t1.data);
    }
}

const obj = new DoublyLL();
obj.insertAtEnd(10);
obj.insertAtEnd(20);
obj.insertAtEnd(30);
obj.insertAtEnd(40);
obj.insertAtBeg(5);
obj.insertAtMid(50, 20);
obj.deletionLL(5);
obj.deletionLL(50);
obj.deletionLL(40);
obj.printDLL();

// TODO: create circular doubly linked list and implement all the above operations in it.