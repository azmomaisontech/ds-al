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

function power(num, exp) {
    if(exp === 0) return 1

    return num * power(num, exp - 1)
}

function factorial(num) {
    if(num <= 1) return 1
    return num * factorial(num - 1)
}

function productOfArray(arr) {
    let sum = 1;
    function multiply(newArr) {
        if(newArr.length <= 0) {
            return
        }
        sum = sum * newArr[0]
        multiply(newArr.slice(1))
    }
    multiply(arr)
    return sum
}


console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60
