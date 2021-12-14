function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// start at index - 0; go through the entire array,
// find the element that is smallest in the entire array, icluding index 0, then swap,
// increment to index - 1; go through entire array, bar index - 0

function selectionSort(arr){
    let minNumIndex = 0;
    let count = 0;
    let length = arr.length;
    function innerSort(newCount) {
        if(newCount >= length - 1) return;
        for(let i = newCount; i < arr.length; i++) {
            if(arr[minNumIndex] > arr[i]) {
                minNumIndex = i;
            }
        }
        if(minNumIndex !== newCount) {
            swap(arr, minNumIndex, newCount)
        }
        newCount++
        innerSort(newCount++)
    }
    innerSort(count)
    return arr
}


console.log(selectionSort([5,39, 12, 3, 2, 5, 1]))
// console.log(selectionSort([34,33,10,19,17]))