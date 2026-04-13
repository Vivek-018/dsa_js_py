class Node {
    constructor(info, next = null) {
        this.data = info;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertAtEnd(value) {
        const temp = new Node(value);
        if (this.head !== null) {
            let t1 = this.head;
            while (t1.next !== null) {
                t1 = t1.next;
            }
            t1.next = temp;
        } else {
            this.head = temp;
        }
    }

    insertAtBeg(value) {
        const temp = new Node(value);
        temp.next = this.head;
        this.head = temp;
    }

    insertInMid(value, x) {
        const temp = new Node(value);
        let t1 = this.head;

        while (t1.next !== null) {
            if (t1.data === x) {
                temp.next = t1.next;
                t1.next = temp;
            }
            t1 = t1.next;
        }
    }

    deleteLL(value) {
        let t1 = this.head;
        let prev = t1;
        if (t1.data === value) {
            this.head = t1.next;
        }
        while (t1.next !== null) {
            if (t1.data === value) {
                prev.next = t1.next;
                break;
            } else {
                prev = t1;
                t1 = t1.next;
            }
        }
        if (t1.data === value) {
            prev.next = null;
        }
    }

    printLL() {
        let t1 = this.head;
        while (t1.next !== null) {
            console.log(t1.data);
            t1 = t1.next;
        }
        console.log(t1.data);
    }
}

const obj = new SinglyLinkedList();
console.log("list",obj);
obj.insertAtEnd(10);
obj.insertAtEnd(20);
obj.insertAtEnd(30);
obj.insertAtEnd(30);
obj.printLL();