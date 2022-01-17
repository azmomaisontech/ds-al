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
        if(!map) return undefined;
        if(map) return map.find(item => item[0] === key)[1]
    }

    keys() {
        let keyArray = []
        this.keyMap.forEach(keys => {
            if(keys) {
                keys.forEach(key => keyArray.push(key[0]))
            }
        })
        return [...new Set(keyArray)]
    }

    values() {
        let valueArray = []
        this.keyMap.forEach(keys => {
            if(keys) {
                keys.forEach(key => valueArray.push(key[1]))
            }
        })
        return [...new Set(valueArray)]
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

const hashTable = new HashTable(17)
hashTable.set("pink", "#ffc0cb")
hashTable.set("cyan", "#00ffff")
hashTable.set("white", "#ffffff")
hashTable.set("black", "#000000")
hashTable.set("salmon", "#FA8072")
hashTable.set("maroon", "#800000")
hashTable.set("maroon", "#800000")
hashTable.set("maroon", "#800000")

console.log(hashTable.get("white"))
console.log(hashTable.get("pink"))
console.log(hashTable.get("green"))

console.log(hashTable.keys())
console.log(hashTable.values())


// Linear Probing


