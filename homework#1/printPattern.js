function printPattern(n) {

    const pattern = '*';

    if (n <= 1) { return pattern; }

    const fullLine = pattern.repeat(n);
    const middleLines = pattern + ' '.repeat(n - 2) + pattern;
    let result = fullLine;

    for(let i = 3; i < n; i++) {
        result += '\n' + middleLines;
    }

    result += '\n' + fullLine;

    console.log(result);
}
