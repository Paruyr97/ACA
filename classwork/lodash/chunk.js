function chunk(array, size = 1) {

    const result = [];

    for(let i = 0; i <= array.length; i += size){
        const current = array.slice(i, i + size);
        current.length && result.push(current);
    }

    return result;
}

