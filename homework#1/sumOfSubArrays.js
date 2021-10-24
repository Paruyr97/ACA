function sumOfSubArrays(arrays) {

    const sumOfArray = (arr) => arr.reduce((acc, current) => acc + current);

    return arrays.map(item => sumOfArray(item));
}
