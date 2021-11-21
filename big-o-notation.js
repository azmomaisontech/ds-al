function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total+=i
    }
    return total
}

function addUpTo2(n) {
 return n * (n + 1) / 2
}

function logNumberAtleast5(n) {
    for(let i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}


let t1 = Date.now()
console.log(logNumberAtleast5(3))
let t2 = Date.now()
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


// Time Complexity
// Constant don't matter - Convert all Constants to 1
// Arithmetic operations are constant, same as variable assignment
// accessing elements with an index or a key is constant

// Space Complexity
// most primities are constant space except string, which requires 0(n).
// reference types are 0(n)

// Log in BIGO is really just log base 2

// Objects are good options when you don't need ordering. O(1)
// Array adding to the end and removing from the end is 0 (1)





