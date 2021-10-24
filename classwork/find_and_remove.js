
function findAndRemove(obj) {

    const filter = (obj) => {

        const result = {};

        for(let key in obj) {

            const num = Number(obj[key]);

            if(num || num === 0) {
                result[key] = obj[key];
            }
            
        }

        return result;
    }

    const result = {};

    for(let key in obj) {
        result[key] = filter(obj[key]);
    }

    return result;
}
