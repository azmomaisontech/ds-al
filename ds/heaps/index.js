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

    bubbleUp(childIndex) {
        let parentIndex = this.findParentIndex(childIndex)
        if (this.values[parentIndex] > this.values[childIndex] || parentIndex < 0) return;
        this.swap(childIndex, parentIndex)
        this.bubbleUp(parentIndex)
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
mbh.insert(39)
mbh.insert(33)
mbh.insert(18)
mbh.insert(27)
mbh.insert(12)
mbh.insert(55)
mbh.insert(34)
mbh.insert(34)
mbh.insert(1)
mbh.insert(199)
console.log(mbh)



// 41 39 33 18 27 12 55