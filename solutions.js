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



//
// console.log(areThereDuplicates(1,2,3,4))
// console.log(areThereDuplicates(1,2,2))
// console.log(areThereDuplicates("a", "b", "c", "a"))


function averagePair(arr, avg) {
    const arrLength = arr.length;
    if(arrLength === 0) return false;
    let i = 0;
    let j = arrLength - 1
    while(i < j) {
        let sumAvg = (arr[i] + arr[j]) / 2
        if(sumAvg < avg) {
            i++
        }  else if(sumAvg > avg) {
            j--
        } else {
            return true
        }
    }
    return false;
}

//
// console.log(averagePair([1,2,3],2.5))
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
// console.log(averagePair([-1,0,3,4,5,6],4.1))
// console.log(averagePair([],4))


function isSubsequence(word, wordGroup) {
    const length = wordGroup.length
    const wordLength = word.length
    let i = 0;
    let j = 0
    while(j < length){
        if(i === wordLength) {
            return true
        }
        if(word[i] === wordGroup[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    if(i !== wordLength) {
        return false
    } else {
        return true
    }
}


// console.log(isSubsequence("hello", "hello world"))
// console.log(isSubsequence("sing", "sting"))
// console.log(isSubsequence("abc", "abracadabra"))
// console.log(isSubsequence("abc", "acb"))

function maxSubarraySum(arr, count){
    const length = arr.length;
    if(length < count) return null
    let tempSum = 0;
    let maxSum = 0;
    for(let i = 0; i < count; i++) {
        tempSum+= arr[i]
    }

    for(let j = count; j < length; j++) {
        tempSum = tempSum - arr[j - count] + arr[j]
        if(tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum
}

// console.log(maxSubarraySum([100,200,300,400],2))
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4))
// console.log(maxSubarraySum([-3,4,0,-2,6,-1],2))
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
// console.log(maxSubarraySum([2,3],3))


function minSubArrayLen(arr, total){
    const length = arr.length;
    let sum = 0
    let count = 0
   for(let i = 0; i < length; i++) {
       sum += arr[i]
       if(sum >= total) {
           count = i + 1
       }
       if(count === 1) {
           return count
       }
   }

    let start = 0;
    let end = 0
    while
    for(let j = count; j < arr.length; j++) {
        sum += arr[j - count] + arr[j];
        if(sum >= 7) {

        }

        if(count === 1) {
            return count
        }
    }

    return count;
}


// console.log(minSubArrayLen([2,3,1,2,4,3], 7))
// console.log(minSubArrayLen([2,1,6,5,4], 9))
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55))
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11))
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95))























































