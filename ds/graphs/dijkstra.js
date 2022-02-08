// Intro
// Edsger Dijkstra
// Finding the shortest path between two points
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addNode(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }

    enQueue(node) {
        this.values.push(node)
        this.sort()
    }

    deQueue() {
        return this.values.pop()
    }

    sort() {
        this.values.sort((a, b) => b.priority - a.priority)
    }
}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addNode("A", "B", 4)
g.addNode("A", "C", 2)
g.addNode("B", "E", 3)
g.addNode("C", "D", 2)
g.addNode("C", "F", 4)
g.addNode("D", "F", 1)
g.addNode("D", "E", 3)
g.addNode("E", "F", 1)

// shortest path from A to E is ACDFE

const p = new PriorityQueue()
p.enQueue({val: "C", priority: 3})
p.enQueue({val: "D", priority: 4})
p.enQueue({val: "A", priority: 1})
p.enQueue({val: "B", priority: 2})
p.enQueue({val: "E", priority: 5})
console.log(p)
console.log(p.deQueue())
