function getDigit(num, pos) {
    const numStr = String(num);
    const length = numStr.length - 1
    return parseInt(String(num)[length - pos] ?? 0,10)
}

// usingMath
function getDigit2(num, pos) {
   return Math.floor(Math.abs(num) / Math.pow(10, pos) % 10)
}

function digitCount(num) {
    return String(num).length
}

// usingMath
function digitCount2(num) {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
    let digit = 0;
    function innerArr(newArr) {
        if(newArr.length <= 0) return;
        digit = Math.max(digitCount2(newArr[0]), digit)
        innerArr(newArr.slice(1))
    }
    innerArr(arr)
    return digit
}

function radix(numsArr) {
    let mostNum = mostDigits(numsArr)
    for(let i = 0; i < mostNum; i++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let j = 0; j < numsArr.length; j++) {
            let index = getDigit(numsArr[j], i)
            digitBuckets[index].push(numsArr[j])
        }
        numsArr = [].concat(...digitBuckets)
    }
    return numsArr
}


console.log(radix([23,345,5467,12,2345,9852]))

