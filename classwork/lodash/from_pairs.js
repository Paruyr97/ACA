function fromPairs(array) {
    return array.map(subArr => ({ [subArr[0]]: subArr[1]}));
}
