// Different types - Binary Heaps
// Max and Min Binary Heaps
// Max Binary Heaps
// Parent is always larger than children
// Left nodes are filled out first
// Left child - 2n + 1
// Right child - 2n + 2
// From child to parent - Floored((n - 1)/ 2)

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(val) {
        this.values.push(val)
        this.bubbleUp(this.values.length - 1)
    }

    extractMax() {
        if (this.values.length === 0) return
        this.swap(0, this.values.length - 1)
        this.values.pop()
        this.bubbleDown(0)
    }

    bubbleUp(childIndex) {
        let parentIndex = this.findParentIndex(childIndex)
        if (this.values[parentIndex] > this.values[childIndex] || parentIndex < 0) return;
        this.swap(childIndex, parentIndex)
        this.bubbleUp(parentIndex)
    }

    bubbleDown(parentIndex) {
        let childIndex = this.findLargestChildIndex(parentIndex)
        if (this.values[parentIndex] > this.values[childIndex] || childIndex > this.values.length - 1) return;
        this.swap(parentIndex, childIndex)
        this.bubbleDown(childIndex)
    }

    findLargestChildIndex(parentIndex) {
        let left = (2 * parentIndex) + 1
        let right = (2 * parentIndex) + 2
        if (this.values[left] >= this.values[right] || !this.values[right]) return left
        return right;
    }

    findParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    swap(idx1, idx2) {
        let temp = this.values[idx1]
        this.values[idx1] = this.values[idx2]
        this.values[idx2] = temp
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }

}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        this.values.push(newNode)
        this.bubbleUp(this.values.length - 1)
    }

    dequeue() {
        let deQueued = this.values[0]
        if(!deQueued) return;
        this.swap(0, this.values.length - 1)
        this.values.pop()
        this.bubbleDown(0)
        return deQueued
    }

    bubbleDown(parentIndex) {
        let childIndex = this.findChildIndex(parentIndex)
        if (childIndex > this.values.length - 1) return;
        if (this.values[parentIndex].priority < this.values[childIndex].priority) return;
        this.swap(childIndex, parentIndex)
        this.bubbleDown(childIndex)
    }

    bubbleUp(childIndex) {
        let parentIndex = this.findParentIndex(childIndex)
        if (parentIndex < 0) return;
        if (this.values[parentIndex].priority < this.values[childIndex].priority) return;
        this.swap(parentIndex, childIndex)
        this.bubbleUp(parentIndex)
    }

    findChildIndex(parentIndex) {
        let left = (2 * parentIndex) + 1
        let right = (2 * parentIndex) + 2
        if(!this.values[right]) return left;
        if (this.values[left].priority <= this.values[right].priority) return left;
        return right
    }

    findParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    swap(idx1, idx2) {
        let temp = this.values[idx1]
        this.values[idx1] = this.values[idx2]
        this.values[idx2] = temp
    }
}

let pQ = new PriorityQueue()
pQ.enqueue("Common cold", 1)
pQ.enqueue("Gunshot wound", 5)
pQ.enqueue("High fever", 2)
console.log(pQ.dequeue())
console.log(pQ.dequeue())
console.log(pQ.dequeue())
console.log(pQ.dequeue())
console.log(pQ.dequeue())
console.log(pQ.dequeue())
console.log(pQ.dequeue())
// let mbh = new MaxBinaryHeap()
// mbh.insert(41)
// mbh.insert(39)
// mbh.insert(33)
// mbh.insert(18)
// mbh.insert(27)
// mbh.insert(12)
// mbh.insert(55)
// console.log(mbh)
// console.log(mbh)


