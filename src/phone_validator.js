export let numberValidator = (number) => {
    let result =  number.split(/[(\s\(\)\-)]+/g).join('');
    let ru = '+7';
    let arm = '+374';
    let china = '+89';
    let usa = '+1';
    if (result.startsWith('89')) {
        return result = ru + result.substring(1, result.length)
    } //RU
    if (result.startsWith('86')) {
        return result = china + result.substring(1, result.length)
    }//CHINA
    if (result.startsWith('1')) {
        return result = usa + result.substring(1, result.length)
    }//USA
    if (result.startsWith('374')) {
        return result = arm + result.substring(3, result.length)
    }//arm
    return result
}







