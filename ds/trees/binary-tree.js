// Two - Max children
// Node to left must be less than parent
// Every node to right must be greater than.

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 0;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if(!this.root) return this.root = newNode
        let current = this.root
        while(true) {
            if(val > current.val) {
                if(!current.right) {
                    return current.right = newNode
                } else {
                    current = current.right
                }
            } else if(val < current.val) {
                if(!current.left) {
                    return current.left = newNode
                } else {
                    current = current.left
                }
            } else {
                return current.count++
            }
        }
    }

    find(val) {
        if(!val) return false;
        if(!this.root) return false
        let current = this.root
        let found = false;
        while(!found && current) {
            if(val < current.val) {
                current = current.left
            } else if(val > current.val) {
                current = current.right
            } else {
                found = true
            }
        }
        if(!found) return undefined
        return current
    }
}

module.exports = BinarySearchTree

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(2)
tree.insert(8)
tree.insert(3)
tree.insert(7)
tree.insert(13)
tree.insert(10)
tree.insert(15)
console.log(tree)

                                            //                      10
                                            //         6                       13
                                            // 2               8           10          15
                                            //     3       7