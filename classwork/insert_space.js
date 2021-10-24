function insertSpace(str) {
    
    const space = ' ';
    let result = '';

    for(let char of str) {
        if(char === char.toUpperCase()) {
            result += space + char;
        } else {
            result += char;
        }
    }

    return result.trim();
}
