function loadingBar(num){
    let completed = '%'.repeat(num / 10)
    let incomplete = '.'.repeat(10 - completed.length)

    if (incomplete.length !== 0){
        console.log(`${num}% [${completed}${incomplete}]`)
        console.log('Still loading...')
    } else {
        console.log(`100% Complete!`)
    }
}
loadingBar(100)