class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
            this.adjacencyList[vertex1] =  this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
        }
    }

}

const g = new Graph()
g.addVertex("Tokyo")
g.addVertex("Lagos")
g.addVertex("Ghana")
g.addEdges("Tokyo", "Lagos")
console.log(g)
g.removeEdges("Tokyo", "Lagos")
console.log(g)
