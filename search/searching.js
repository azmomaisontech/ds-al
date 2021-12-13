// function that accepts an array and a value
// loop through the entire array, and check if value is in array
// if found, return the index, else return -1

function linearSearch(arr, value) {
    let length = arr.length;
    for(let i = 0; i < length;  i++) {
        if(value === arr[i]) return i
    }
    return - 1;
}

// Using Multiple pointer
function binarySearch(arr, value) {
    let length = arr.length;
    let start = 0;
    let end = length;
    let count = 0;
    while(start < end - 1) {
       let middle =  Math.floor((end + start) / 2)
        if(arr[middle] > value) {
            end = middle
        } else if(arr[middle] < value) {
            start = middle
        } else {
            return middle
        }
    }
    return -1
}

// My initial approach
// Add a start and end;
// start will be whenever you find the first letter of the search, then end will be start + the length of search
// If that word is not equal to search, the loop start, moves to the end, and search till we find the first letter
// or we reach the end.
function stringSearch(str, pattern) {
    let start = 0;
    let patternLength = pattern.length;
    let strLength = str.length;
    let count = 0
    for(let i = 0; i < strLength; i++) {
        let char = str[i]
       if(char === pattern[0]) {
           start = i
           let word = str.slice(i, patternLength + i)
           if(word === pattern) {
               count++
           }
       }
    }

    return count
}

console.log(stringSearch("lorie loled", "lo"))