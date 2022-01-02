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

    1
    head - 1
    tail - 1

    head - 0
    head.next =

    unshift(val) {
        let node = new Node(val)
        if(!this.head) {
            this.head = node
            this.tail = node
        } else {
            let prevHead = this.head;
            prevHead.prev = node;
            this.head = node;
            this.head.next = prevHead
        }
        this.length++
    }
}

// else if(this.length === 1) {
//     let tail = this.tail;
//     this.head = node;
//     head.next = tail;
//     tail.prev = this.head;
// }


const dList = new DoublyLinkedList()
dList.push(2)
dList.unshift(1)
console.log(dList)

