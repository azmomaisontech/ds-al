function sameFrequency(int, int2){
    let counts = {}
    let counts2 = {}
    for(let d of [...String(int)]) {
        counts[d] =  (counts[d] || 0) + 1
    }
    for(let d of String(int2)) {
        counts2[d] =  (counts2[d] || 0) + 1
    }

    for(let d in counts){
        if(counts[d] !== counts2[d]) {
            return false
        }
    }

    return true
}
//
// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))
// console.log(sameFrequency(22, 222))

function areThereDuplicates(...rest) {
    let count = {}
    for(let d of rest) {
        if(count[d]) {
            return true
        }
        count[d] = 1
    }
    return false
}

function areThereDuplicates(...rest) {
   return  new Set(rest).size !== rest.length
}




console.log(areThereDuplicates(1,2,3,4))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates("a", "b", "c", "a"))