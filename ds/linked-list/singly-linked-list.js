class Node{
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
        let node = new Node(val)
        if(this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
        this.length++
    }

    pop() {
        if(this.length === 0) return undefined;
        if(this.length === 1) {
            this.clearList()
        } else {
            let current = this.head;
            let newTail;
            while(current.next) {
                newTail = current
                current = current.next
            }
            this.tail = newTail
            this.tail.next = null;
        }
        this.length--
    }

    shift() {
        if(this.length === 0) return undefined;
        if(this.length === 1) {
            this.clearList()
        } else {
           let current = this.head;
            this.head = current.next
        }
        this.length--
    }

    unshift(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head;
        } else {
            let oldHead = this.head
            this.head = newNode
            this.head.next = oldHead
        }
        this.length++
    }

    get(index) {
        if(!this.head || index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index && current.next) {
            current = current.next;
            counter++
        }
        return current
    }

    set(index, val) {
        if(!index || !val) return "Please check that the index or value is provided";
        let nodeToUpdate = this.get(index)
        if(nodeToUpdate) {
            nodeToUpdate.val = val
        }
        return nodeToUpdate
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) return this.unshift(val);
        let current = this.get(index - 1);
        let node = new Node(val);
        let temp = current.next;
        current.next = node;
        node.next = temp;
        this.length++
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(this.length <= 1) return this.clearList();
        if(index === this.length - 1) return this.pop();
        let prevNode =  this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
    }

    // 1,2,3,4,5,6

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this
    }

    clearList(){
        this.head = null;
        this.tail = null;
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.reverse()
console.log(list)
console.log(list.get(5).val)
console.log(list.get(4).val)
console.log(list.get(3).val)
console.log(list.get(2).val)
console.log(list.get(1).val)
console.log(list.get(0).val)
