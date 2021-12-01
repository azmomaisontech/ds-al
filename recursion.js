function recursion(n) {
    if(n <= 0) {
        console.log("All done");
        return
    }
    console.log(n)
    return recursion(n - 1)
}


function sum(n) {
    if(n === 1) return 1
    return n + sum(n - 1)
}

function factorial(n) {
    if(n === 1) return 1
    return n * sum(n - 1)
}

function oddValue(arr) {
    let newArr = []
    if(arr.length === 0) {
        return newArr
    }

    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    return newArr.concat(oddValue(arr.slice(1)))
}

function oddValue2(arr) {
    let newArr = []

    function helper(reducedArr) {
        if(reducedArr.length === 0) return
        if(reducedArr[0] % 2 !== 0) {
            newArr.push(reducedArr[0])
        }

        helper(reducedArr.slice(1))
    }

    helper(arr)

    return newArr
}

console.log(oddValue2([1,2,3,4,5]))
