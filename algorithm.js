function takesStringAndReturnCounts(s){
    let count = {};
    if(!s) return count;
    const convertToLowerCase = s.toLowerCase();
    for(const char of convertToLowerCase) {
        if(!testForAlphaNumeric(char)) continue;
        if(count.hasOwnProperty(char)) {
            count[char]++
        } else {
            count[char] = 1
        }
    }
    return count
}

function testForAlphaNumeric(s) {
    return /^[a-z0-9]+$/i.test(s)
}

console.log(takesStringAndReturnCounts("My Phone number!"))