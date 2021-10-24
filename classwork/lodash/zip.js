function zip(...arrays) {

    const result = [];
    const len = Math.min(...arrays.map(el => el.length));   

    for(let i = 0; i < len; i++) {
        const current = [];
        arrays.forEach(el => current.push(el[i]));
        result.push(current);
    }

    return result;
}
