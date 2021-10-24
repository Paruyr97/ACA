
function groupBy(array, by) {

    const result = {};

    if (by === 'length') {
        array.forEach(el => {
            result[el.length] = array.filter(item => el.length === item.length);
        });
    } else {
        array.forEach(el => {
            result[by(el)] = array.filter(item => by(el) === by(item));
        });
    }

    return result;
}
