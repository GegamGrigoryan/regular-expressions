export let numberValidator = (number) => {
    let result = number.split(/[(\s()\-)]+/g).join('');
    let tell = {
        ru: '89',
        arm: '374',
        china: '86',
        usa: '1',
    }

    for (let key in tell) {
        if (result.startsWith(tell[key])) {
            tell[key] == '89' ? tell[key] = '7' : tell[key] = tell[key];
            return result = '+' + tell[key] + result.substring(tell[key].length, result.length)
        }
    }
    return result
}
