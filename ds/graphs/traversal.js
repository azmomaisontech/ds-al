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

    removeVertex(vertex1) {
        if (this.adjacencyList.hasOwnProperty(vertex1)) {
            this.adjacencyList[vertex1].forEach((vertex) => {
                this.removeEdge(vertex1, vertex)
            })
            delete this.adjacencyList[vertex1]
        }
    }

    dfs(vertex) {
        let visited = {}

    }

}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "F")
g.addEdge("D", "E")
g.addEdge("F", "E")
console.log(g)

