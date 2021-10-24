function prefix(str) {
    const array = str.split(' ');

    const mapping = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    return mapping[array[0]](array[1], array[2]);
}
