class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(key) {
        if (!this.adjacencyList.hasOwnProperty(key)) {
            this.adjacencyList[key] = []
        }
    }

}

