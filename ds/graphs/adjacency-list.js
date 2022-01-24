class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdges(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }

}

const g = new Graph()
g.addVertex("Tokyo")
g.addVertex("Lagos")
g.addVertex("Ghana")
g.addEdges("Tokyo", "Lagos")
console.log(g)
