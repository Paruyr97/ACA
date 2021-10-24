function reduce(arr, callback, acc) {
    let start = 0;

    if (acc === undefined) {
        acc = arr[0];
        start = 1;
    }

    for (let i = start; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr);
    }

    return acc;
}
