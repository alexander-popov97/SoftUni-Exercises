function echoType(n){
    if (typeof n == 'string'){
        console.log('string')
        console.log(n)
    } else if (typeof n == 'number'){
        console.log('number')
        console.log(n)
    } else if (typeof n == 'object'){
        console.log('object')
        if (n === null){
            console.log('Parameter is not suitable for printing')
            return;
        } else {
            console.log(n)
        }
    } else {
        console.log('Parameter is not suitable for printing')
    }
}
echoType(true)