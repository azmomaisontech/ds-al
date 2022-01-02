class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++
    }

    pop() {
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            let poppedNode = this.tail
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--
    }

    shift() {
        if(!this.head) return undefined;
        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
           let shiftedNode = this.head;
           this.head = shiftedNode.next
           this.head.prev = null;
           shiftedNode.next = null;
        }
        this.length--
    }

    unshift(val) {
        if(!this.head) {
            this.tail = 
        }

    }
}


const dList = new DoublyLinkedList()
dList.push(1)
dList.push(2)
dList.push(3)
dList.pop()
console.log(dList)

