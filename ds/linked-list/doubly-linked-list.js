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
        let mid = this.length / 2
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

    set(index, val) {
        let node = this.get(index)
        if(!node) return false;
        node.val = val;
        return true;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)
        let node = new Node(val)
        let replacedNode = this.get(index)
        let prev = replacedNode.prev
        let next = replacedNode.next
        prev.next = node;
        replacedNode.prev = node;
        node.prev = prev;
        node.next = replacedNode
        this.length++
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        let removedNode = this.get(index);
        let prev = removedNode.prev;
        let next = removedNode.next;
        prev.next = next;
        next.prev = prev
        removedNode.next = null;
        removedNode.prev = null;
        this.length--
    }
}

const dList = new DoublyLinkedList()
dList.push(1)
dList.push(2)
dList.push(4)
dList.push(5)
dList.push(6)
dList.push(7)
dList.push(8)
dList.remove(1)
console.log(dList.get(0))
console.log(dList.get(1))
console.log(dList.get(2))


