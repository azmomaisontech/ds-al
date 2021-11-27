function search(array, num) {
    let min = 0;
    let max = array.length - 1
    while(min <= max) {
        let middle = Math.floor((min + max) / 2)
        if(num < array[middle]) {
            max = middle - 1
        } else if(num > array[middle]){
            min = middle + 1
        } else {
            return middle
        }
    }
    return -1
}

// console.log(search([1,2,3,4,5,6], 4))
// console.log(search([1,2,3,4,5,6], 6))
// console.log(search([1,2,3,4,5,6], 11))
// console.log(search([1,2,3,4,5,6], 2))