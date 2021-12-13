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

function recursiveRange(n) {
    let sum = 0;

    function addUp(newN) {
        if(newN === 0) return 0
        sum += newN

        addUp(newN - 1)
    }

    addUp(n)

    return sum;
}

function fib(n) {
    let fibArray = [0,1];
    function sequence(count) {
        if(count <= 0) return;
        let length = fibArray.length;
        let sum = fibArray[length - 2] + fibArray[length - 1]
        fibArray.push(sum)
        sequence(count - 1)
    }
    sequence(n)
    return fibArray[n]
}

function reverse(str){
    let rStr = "";
    function mini(n){
        if(n < 0) return;
        rStr += str[n]
        mini(n - 1)
    }
    mini(str.length - 1)
    return rStr;
}

function isPalindrome(str){
    let rStr = "";
    function mini(n){
        if(n < 0) return;
        rStr += str[n]
        mini(n - 1)
    }
    mini(str.length - 1)
    return rStr === str;
}

const isOdd = val => val % 2 !== 0;
function someRecursive(arr, calb){
    if(arr.length === 0) return false;
    if(calb(arr[0])) return true
    return someRecursive(arr.slice(1), calb)
}

function flatten(arr){
    const length = arr.length;
    let flatArray = []

    for(let i = 0; i < length; i++) {
        if(Array.isArray(arr[i])) {
            flatArray = flatArray.concat(flatten(arr[i]))
        } else {
            flatArray.push(arr[i])
        }
    }

    return flatArray
}

function capitalizeFirst(arr) {
    let newArr = []
    if(arr.length === 0) return []
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    newArr.push(arr[0]);
    return newArr.concat(capitalizeFirst(arr.slice(1)))
}

function nestedEvenSum (obj) {
    let sum = 0;
    for(let item in obj) {
        if(typeof obj[item] === "object") {
            sum = sum + nestedEvenSum(obj[item])
        } else if(typeof obj[item] === "number" && obj[item] % 2 === 0) {
            sum = sum + obj[item]
        }
    }
    return sum
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};


function capitalizeWords(arr) {
    let newArr = []
    if(arr.length === 0) return [];
    arr[0] = arr[0].toUpperCase()
    newArr.push(arr[0])
    return newArr.concat(capitalizeWords(arr.slice(1)))
}


function stringifyNumbers(obj) {
    let constructedObj = {}
    for(let key in obj) {
        if(typeof obj[key] === "number") {
            constructedObj = Object.assign(constructedObj, {[key]: String(obj[key])})
        } else if(typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            constructedObj = Object.assign(constructedObj, {[key]: stringifyNumbers(obj[key])})
        }  else {
            constructedObj = Object.assign(constructedObj, {[key]: obj[key]})
        }
    }

    return constructedObj
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function collectStrings(inputObj) {
    let arrayOfString = [];
    for(let key in inputObj) {
        if(typeof inputObj[key] === "string") {
            arrayOfString.concat(arrayOfString.push(inputObj[key]))
        } else if(typeof inputObj[key] === "object") {
            arrayOfString = arrayOfString.concat(collectStrings(inputObj[key]))
        }
    }

    return arrayOfString;
 }


const objtt = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(objtt)) // ["foo", "bar", "baz"])

