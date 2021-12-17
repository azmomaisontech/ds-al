function swap(arr, firstIdx, secondIdx) {
    let hold = arr[firstIdx];
    arr[firstIdx] = arr[secondIdx]
    arr[secondIdx] = hold;
}

function pivot(arr, start = 0, end = arr.length) {
    let pivotItem = arr[start]
    let swapIdx = start;
    for(let i = start + 1;  i < end; i++) {
        if(pivotItem > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, swapIdx, start)
    return swapIdx
}

function quickSort(arr, start = 0, end = arr.length) {
    if(start < end) {
        let pivotIndex =  pivot(arr, start, end)
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, end)
    }
    return arr
}

console.log(quickSort([1,5,2,1,8,4,7,6,3]))
// console.log(quickSort([4,8,2,1,5,7,6,3]))
// console.log(quickSort([9,8,2,1,5,7,6,3]))