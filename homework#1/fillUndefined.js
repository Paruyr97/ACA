function fillUndefined(arr) {

    const min =  Math.min(...arr);
    const max =  Math.max(...arr);
    const result = Array.apply(undefined, { length: max - min + 1});

    arr.forEach((el, idx, arr) => result[el - min] = arr[idx]);

    return result;
}
