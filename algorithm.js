function takesStringAndReturnCounts(s){
    let count = {};
    if(!s) return count;
    const convertToLowerCase = s.toLowerCase();
    for(const char of convertToLowerCase) {
        if(!regexTestForAlphaNumeric(char)) continue;
        if(count.hasOwnProperty(char)) {
            count[char]++
        } else {
            count[char] = 1
        }
    }
    return count
}

function regexTestForAlphaNumeric(s) {
    return /^[a-z0-9]+$/i.test(s)
}

// This is faster
function charCodeAtTestForAlphaNumeric(char){
    const code = char.charCodeAt(0)
    return !(!(code > 47 && code < 58) && (code > 64 && code < 91) && (code >96 && code < 123));
}

console.log(takesStringAndReturnCounts("My Phone number!"))