// FIFO
// waiting room
// background task
// uploading resources
// printing / task processing

// Using an array - Unshift and pop - bad way
// let queue = []
// queue.unshift("1")
// queue.unshift("2")
// queue.unshift("3")
// queue.pop()
// console.log(queue)

class Node{
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    enqueue(val) {
        let node = new Node(val)
        if(!this.last) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++
    }

    dequeue() {
        if(this.length === 1) {
            this.first = null
            this.last = null
        } else {
            let prevFirst = this.first;
            let newFirst = prevFirst.next;
            prevFirst.next = null;
            this.first = newFirst;
        }
        this.length--
    }
}

const queue = new Queue()
queue.enqueue(1)
console.log(queue)
queue.enqueue(2)
console.log(queue)
queue.enqueue(3)
console.log(queue)
queue.dequeue()
console.log(queue)
queue.dequeue()
console.log(queue)
queue.dequeue()
console.log(queue)





