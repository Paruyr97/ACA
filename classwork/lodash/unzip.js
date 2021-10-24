function unZip(...arrays) {
	
    const result = [];

    for(let i = 0; i < 2; i++) {
        const current = [];
        arrays.forEach(el => current.push(el[i]));
        result.push(current);
    }

    return result;
}
