function funcConverter(funcName) {

    const body = funcName.substring(funcName.indexOf('{'));

    if (funcName.includes('=>')) {
        if (funcName.includes('name')) {
            return 'function name' + funcName.replace('=> ', '').split(' ').slice(3).join(' ');
        } else {
            return 'function () {}';
        }
    }
    
    const arguments = funcName.substring(funcName.indexOf('('), funcName.indexOf(')') + 1);

    if (funcName.includes('name')) {
        return 'const name = ' + arguments + ' => ' + body;
    } else {
        return 'const name = ' + arguments + ' => ' + body;
    }
}
