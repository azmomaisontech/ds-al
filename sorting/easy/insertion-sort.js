function move(arr, toIndex, fromIndex, element) {
    arr.splice(toIndex, 0, element)
    arr.splice(fromIndex + 1, 1)
}

// Go through array starting at index- 1, check index 0 if it is larger, if it it, insert before index 0,
// go to index - 2, check if index - 1 is larger, and insert appropriately.

function insertionSort(arr){
    let length = arr.length;
    for(let i = 1; i < length; i++) {
        let j = i - 1;
        let follow = i;
        for(j; j >= 0; j--) {
            console.log(arr)
            if(arr[follow] < arr[j]) {
                move(arr, j, follow, arr[follow])
                follow--
            }
        }
    }
    return arr;
}

console.log(insertionSort([38,2,3,4,29,1,5,7,4]))
console.log(insertionSort([5,4,3,2,1]))
console.log(insertionSort([2,1,9,76,4]))
