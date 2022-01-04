// LIFO
// Managing Functions
// Undo/ Redo
// Routing - history object

// First implementation
// Using Javascript Array - Push and pop Methods only.
// let stack = []
// stack.push("Moses")
// stack.push("Aizee")
// stack.pop()

// Using Javascript Array - Unshift and shift Methods only - Bad implementation.
// stack.unshift("Moses")
// stack.unshift("Aizee")
// stack.shift()


// Second implementation
// Using Linkedlist
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.last = null;
        this.first = null;
        this.size = 0
    }

    push(val) {
        let node = new Node(val)
       if(!this.last) {
           this.last = node;
           this.first = node
       } else {
           node.next = this.last
           this.last = node
       }
        return ++this.size
    }

    pop() {
        if(!this.last) return null;
        if(this.size === 1) {
            this.last = null;
            this.first = null;
        } else {
            let nextHead = this.last.next
            this.last.next = null;
            this.last = nextHead
        }
        return --this.size;
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()

console.log(stack)