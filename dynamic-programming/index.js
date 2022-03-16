// f(n) = f(n - 1) + f(n + 2)
function fibonnaci(n) {
    if(n <= 2) return 1
    return fibonnaci(n - 1) + fibonnaci(n - 2)
}
// O(2^n)
// This is so because we are not remembering old values.

// Using memo
function fib(n, memo=[]) {
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1
    const res = fib(n - 1, memo) + fib(n - 2, memo)
    memo[n] = res
    return res
}
// O(n)

// Using table
function fibTable(n) {
    if(n <= 2) return 1
    const fibTable = [0,1,1]
    for(let i = 3; i <= n; i++) {
        fibTable[i] = fibTable[i - 1] + fibTable[i - 2]
    }
    return fibTable[n]
}


console.log(fibTable(1100))
console.log(fib(1100))



// 1 1 2 3 5 8 13 21 34