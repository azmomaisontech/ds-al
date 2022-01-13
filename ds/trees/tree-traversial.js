const BinarySearchTree = require("./binary-tree")
// BFS = Breath first search
// using queue to depict a queue
class BFS extends BinarySearchTree {
    traverse(){
        let queue = [this.root.val]
        let visited = []
        while(queue.length > 0){
            let firstItem = queue[0]
            let currentNode = this.find(firstItem)
            if(currentNode.left){
                queue.push(currentNode.left.val)
            }
            if(currentNode.right) {
                queue.push(currentNode.right.val)
            }
            visited.push(firstItem)
            queue.shift()
        }
        return visited
    }
}

const tree = new BFS()
// tree.insert(10)
// tree.insert(6)
// tree.insert(15)
// tree.insert(3)
// tree.insert(8)
// tree.insert(20)
console.log(tree.traverse())
                        //                 10
                        //         6                   15
                        // 3             8                     20

// DFS = Dept first search
