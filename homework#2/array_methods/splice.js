function splice(arr, index, deleteCount, ...rest) {
    const result = [];
    if (index > arr.length) {
        index = arr.length;
    } else if(index < 0) {
        index = arr.length + index;
    }
    for(let i = index; i < index + deleteCount; i++) {
        result.push(arr[i]);
        delete arr[i];
    }
    for(let i = 0; i < rest.length; i++) {
        arr[index + i] = rest[i];
    }
    return result;
}
