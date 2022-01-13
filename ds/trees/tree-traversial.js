const BinarySearchTree = require("./binary-tree")
// BFS = Breath first search
// using queue to depict a queue
class BFS extends BinarySearchTree {
    traverse() {
        if (!this.root) return []
        let queue = [this.root]
        let visited = []
        while (queue.length > 0) {
            let currentNode = queue.shift()
            visited.push(currentNode.val)
            if (currentNode.left) queue.push(currentNode.left)
            if (currentNode.right) queue.push(currentNode.right)
        }
        return visited
    }
}

//                 10
//         6                   15
// 3             8                     20

// DFS = Dept first search
// PreOrder
class DFS extends BinarySearchTree {
    traverse() {
        let visited = []
        let current = this.root
        this.helper(current, visited)
        return visited
    }

    helper(node, visited) {
        visited.push(node.val)
        if (node.left) this.helper(node.left, visited)
        if (node.right) this.helper(node.right, visited)
    }
}

const tree = new DFS()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log(tree.traverse())