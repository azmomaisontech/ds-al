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




// Linear Probing



console.log(hash("pink", 10))
console.log(hash("hi", 10))
console.log(hash("cyan", 10))
console.log(hash("pink", 10))