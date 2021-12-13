function move(arr, toIndex, fromIndex, element) {
    arr.splice(toIndex, 0, element)
    arr.splice(fromIndex + 1, 1)
}

function insertionSort(arr){
    let length = arr.length;
    for(let i = 1; i < length; i++) {
        let j = i - 1;
        let follow = i;
        for(j; j >= 0; j--) {
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
