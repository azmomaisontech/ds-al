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

}

const g = new Graph()
g.addVertex("Tokyo")
g.addVertex("Lagos")
g.addVertex("Ghana")
g.addEdge("Tokyo", "Lagos")
console.log(g)
g.removeVertex( "Lagos")
console.log(g)
