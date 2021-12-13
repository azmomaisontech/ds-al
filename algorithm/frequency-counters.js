// My initial solution
function same(arr1, arr2) {
    let count = 0;
    let second = arr2;
    if(arr1.length !== arr2.length) {
        return false
    }
    arr1.forEach((num) => {
        const index = second.findIndex(num2 => num2 === Math.pow(num, 2))
        if(index > -1) {
            count++
           second.splice(index, 1)
        } else {
            return false
        }
    })
    return count === arr1.length;
}

// Frequency pattern Solution
function fSame(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCount1 = {}
    let frequencyCount2 = {}
    arr1.forEach((num) => {
        frequencyCount1[num] = (frequencyCount1[num] || 0) + 1
    })
    arr2.forEach((num) => {
        frequencyCount2[num] = (frequencyCount2[num] || 0) + 1
    })

    for(let key in frequencyCount1) {
        if(!(key ** 2 in frequencyCount2)) {
            return false
        }
        if(!(frequencyCount1[key] === frequencyCount2[key ** 2])) {
            return false
        }
    }
    return true
}

function validAnagrams(str1, str2) {
    if(str1.length !== str2.length) {
        return false
    }
    let frequencyCount1 = {}
    let frequencyCount2 = {}

    for(let char of str1){
        frequencyCount1[char] = (frequencyCount1[char] || 0) + 1
    }
    for(let char of str2){
        frequencyCount2[char] = (frequencyCount2[char] || 0) + 1
    }

    for(let key in frequencyCount1) {
        if(!(key in frequencyCount2)) {
            return false
        }
        if((frequencyCount1[key] !== frequencyCount2[key])){
            return false
        }
    }
    return true
}

console.log(validAnagrams("texttwisttime", "timetwisttext"))

// validAnagrams(" ", " ")
// validAnagrams("aaz", "zza")
// validAnagrams("anagram", "nagaram")
// validAnagrams("rat", "car")
// validAnagrams("awesome", "awesom")
// validAnagrams("qwerty", "qeywrt")
// validAnagrams("texttwisttime", "timetwisttext")