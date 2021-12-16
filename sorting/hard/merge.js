function mergeTwoArrays(arr1, arr2) {
    let sortedArray = []
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let i = 0
    let j = 0
    while(i < arr1Length && j < arr2Length) {
        if(arr1[i] >= arr2[j]) {
            sortedArray.push(arr2[j])
            j++
        } else {
            sortedArray.push(arr1[i])
            i++
        }
    }
    while(i < arr1Length) {
        sortedArray.push(arr1[i])
        i++
    }
    while (j < arr2Length) {
        sortedArray.push(arr2[j])
        j++
    }
    return sortedArray
}

function mergeSort(arr) {
    let arrLength = arr.length
    if(arrLength <= 1) return arr;
    let middle = Math.floor(arrLength / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))
    return mergeTwoArrays(left, right)
}

console.log(mergeSort([39, 20,2,1,2, 30]))
console.log(mergeSort([1,2,3,4,5,6,20,4]))
console.log(mergeSort([10, 28, 327, 27, 82, 9, 1, 2]))


