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

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addVertex("G")
g.addNode("A", "B", 10)
g.addNode("G", "F", 20)
g.addNode("F", "E", 20)
g.addNode("C", "D", 30)
console.log(g.adjacencyList)