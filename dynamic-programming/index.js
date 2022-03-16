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


console.log(fib(7))
console.log(fib(6))
console.log(fib(5))
console.log(fib(4))
console.log(fib(3))
console.log(fib(2))
console.log(fib(20))
console.log(fib(100))



// 1 1 2 3 5 8 13 21 34