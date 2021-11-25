//Problem 1:  My first solution
function sumZero(arr){
    const arrLength = arr.length
    if(arr[0] > 0) return undefined
    for(let num of arr) {
        if(num >= 0) break;
        let absValue = -(num)
        const positiveIndex = arr.indexOf(absValue)
        if(positiveIndex !== -1) {
            return [num, absValue]
            break;
        }
    }
}

//Problem 2:  My first solution
function countUniqueValues(arr){
   return new Set(arr).size
}

//Problem 2:  My second solution
function countUniqueValue(arr){
    let newArr = []
    arr.forEach(num => {
        if(newArr[newArr.length - 1] !== num) {
            newArr.push(num)
        }
    })
    return newArr.length
}

//Problem 2: Better solution
function countUniqueValue(arr){
    if(arr.length === 0) return 0
    let i = 0
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

console.log(countUniqueValue([-2,-1,-1,0,1]))
// [1,1,1,1,1,2]
// [1,2,3,4,4,4,7,7,12,12,13]
// []
// [-2,-1,-1,0,1]



//Problem 1:  Better Solution
function sumZero2(arr){
    let left = 0;
    let right = arr.length - 1
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum === 0) {
            return [arr[left], arr[right], count]
        } else if(sum > 0) {
            right--
        } else {
            left++
        }
    }
}



// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// Assuming the arrays will always
// be sorted in asc order.
// [-3,-2,-1,0,1,2,3]
// [-3,-2,-1,0,1,2,3] - [-3,3]
// [-2,0,1,3] - UNDEFINED
// [1,2,3] - UNDEFINED