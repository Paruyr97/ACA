function drop(array, n = 1) {

    const result = [...array];

    for(let i = 0; i < n; i++) {
        result.shift();
    }

    return result;
}
