// hash function
// takes data and returns a fixed digit

function hash(string, arrLength) {
    let total = 0;
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = string[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrLength
    }
    return total
}