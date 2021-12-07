// built-in
function sort(arr) {
    return arr.sort((a,b) => a - b)
}

function swap(arr, idx1, idx2){
    let hold = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = hold
}
// First attempt;
function sort2(arr, order = "asc") {
    function innerSort(loopingArr) {
        let length = loopingArr.length - 1
        if(length <= 0) return;
        for(let i = 0; i < length; i ++) {
            if(order === "asc" && arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            } else if(order === "desc" && arr[i] < arr[i + 1] ) {
                swap(arr, i, i + 1)
            }
        }
        innerSort(loopingArr.slice(1))
    }
    innerSort(arr)
    return arr;
}

console.log(sort2([5,3,4,1,2]))
console.log(sort2([23,45,6,12,13]))
console.log(sort2([45,  5, 16, 34, 39, 92, 1,2,3,4, 29, 33, 9, 330, 383, 92929, 1, 11, 23, 13, 126, 12]))
console.log(sort2(["Steele", "Colt", "Data Structures", "Algorithms"], "desc"))