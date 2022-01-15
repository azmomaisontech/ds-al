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
        if(this.values[parentIndex] > this.values[childIndex] || childIndex > this.values.length - 1) return;
        this.swap(parentIndex, childIndex)
        this.bubbleDown(childIndex)
    }

    findLargestChildIndex(parentIndex) {
        let left = (2 * parentIndex) + 1
        let right = (2 * parentIndex) + 2
        if(this.values[left] >= this.values[right]) return left
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

let mbh = new MaxBinaryHeap()
mbh.insert(41)
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)
console.log(mbh)
mbh.extractMax()
console.log(mbh)



// 41 39 33 18 27 12 55