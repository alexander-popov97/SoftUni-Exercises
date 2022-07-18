function houseParty(arr){
    let list = []
    let index = 0
    let command = arr[index].split(" ")
    index++

    for (let i = 1; i <= arr.length; i++){
        if (command[2] !== "not"){
            if (!list.includes(command[0])){
            list.push(command[0])
            } else {
                console.log(`${command[0]} is already in the list!`)
            }
        } else {
            if (!list.includes(command[0])){
                console.log(`${command[0]} is not in the list!`)
            } else {
                list.splice(list.indexOf(command[0]), 1)
            }
        }
        if (i === arr.length){
            i++
            break;
        }
        command = arr[index].split(" ")
        index++
    }
    console.log(list.join("\n"))

}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])