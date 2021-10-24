
function concat(array, ...rest) {

    let result = [...array];

    rest.forEach(el => {
        if (Array.isArray(el)) {
            result.push(...el);
        }
        result.push(el);
    });

    return result;
}
