function power(base, exp){
    if(exp === 0) return 1
    return base * power(base, exp - 1)
}

function factorial(num){
    if(x < 0) return 0
    if(num <= 1 ) return 1
    return num * factorial(num - 1)
}

function productOfArray(arr) {
    if(arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}

function recursiveRange(num){
    if(num === 0) return 0;
    return num + recursiveRange(num - 1)
}

function fib(num){
    if(n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

function reverse(str){
    if(str.length === 1) return str
    return reverse(str.slice(1))  + str[0]
}

function isPalindrome(str){
    return reverse(str) === str
}

function someRecursive(arr, isOdd){
    let length = arr.length;
    if(length <= 0) return false;
    if(isOdd(arr[0])) {
        return true
    } else {
        return someRecursive(arr.slice(1), isOdd)
    }
    return false;
}


const isOdd = val => val % 2 !== 0;

function flatten(arr){
    let arrLength = arr.length;
    let flattenArry = [];
    for(let i = 0; i < arrLength; i++) {
        if(Array.isArray(arr[i])) {
            flattenArry = flattenArry.concat(flatten(arr[i]))
        } else {
            flattenArry.push(arr[i])
        }
    }
    return flattenArry
}

function capitalizeFirst (arr) {
    if(arr.length <= 0) return [];
    let array = []
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    array.push(arr[0])
    return array.concat(capitalizeFirst(arr.slice(1)))
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']