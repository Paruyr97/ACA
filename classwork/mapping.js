function mapping(array) {
    const res = {};

    array.forEach(el => res[el] = el.toUpperCase());

    return res;
}
