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

    get(index) {
        if(this.length === 0 || index < 0 || index >= this.length) return null;
        let mid = Math.ceil(this.length / 2)
        if(index <= mid) {
            let current = this.head;
            for(let i = 0; i < index; i++) {
                current = current.next
            }
            return current
        } else {
            let current = this.tail;
            for(let i = this.length - 1; i > index; i--) {
                current = current.prev
            }
            return current
        }
    }
}


const dList = new DoublyLinkedList()
dList.push(1)
dList.push(2)
dList.push(3)
dList.push(4)
dList.push(5)
dList.push(6)
dList.push(7)
dList.push(8)
console.log(dList.get(7))


