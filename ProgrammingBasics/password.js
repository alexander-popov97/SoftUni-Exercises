function password(input){
 
    let index = 0
    let username = input[index]
    index++
 
    let correctPass = input[index]
    index++
    let command = input[index]
    index++
 
    while (true){
        if (command === correctPass){
            console.log(`Welcome ${username}!`)
        break;
        }
        command = input[index]
        index++
    }
 
}