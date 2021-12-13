// My first solution
function maxSubarraySum(arr, int) {
    const arrLength = arr.length
    if(arrLength < int) return null;
    if(arrLength === 1) return arr;
    let sum = 0
    for(let i = 0; i < arrLength; i++) {
        const plus = arr[i] + buildUp(arr, i, int)
        if(plus > sum) {
            sum = plus
        }
    }
    return sum
}


function buildUp(n, index,  count){
    let sum = 0;
    for(let i = index + 1; i < index + count; i++) {
        sum+= n[i]
    }
    return sum
}


// Better Solution
function maxSubarraySum2(arr, int) {
    const arrLength = arr.length
    if(arrLength < int) return null;
    if(arrLength === 1) return arr;
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < int; i++) {
        tempSum += arr[i]
    }

    for(let j = int; j < arrLength; j++) {
        tempSum = tempSum - arr[j - int] + arr[j]
        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }
    return maxSum
}


console.log(maxSubarraySum2([2,6,9,2,1,8,5,6,3], 3))