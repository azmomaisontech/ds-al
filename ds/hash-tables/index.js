// hash function
// takes data and returns a fixed digit

function hash(string, arrLength) {
    let total = 0;
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(string.length, 100); i++) {
        let char = string[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrLength
    }
    return total
}

// for collision you can use two methods -
// Separate Chaining
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    set(key, value) {
        let index = this.hash(key)
        this.keyMap[index] = this.keyMap[index] ?? []
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this.hash(key)
        let map = this.keyMap[index]
        if(!map) return null;
        if(map) return map.find(item => item[0] === key)

    }

    hash(key) {
        let total = 0;
        const WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }
}

const hashTable = new HashTable(4)
hashTable.set("pink", "#ffc0cb")
hashTable.set("cyan", "#00ffff")
hashTable.set("white", "#ffffff")
hashTable.set("black", "#000000")

console.log(hashTable.get("white"))
console.log(hashTable.get("pink"))
console.log(hashTable.get("green"))


// Linear Probing


