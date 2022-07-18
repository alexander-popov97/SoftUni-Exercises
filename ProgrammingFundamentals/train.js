function train(arr){
    let index = 0
    let oldTrain = arr[index]
    let oldTrainArr = oldTrain.split(" ")
    index++
    let maxCap = Number(arr[index])
    index++
    for (let i = 2; i < arr.length; i++){    
    let command = arr[index].split(" ")
        if (command[0] === "Add"){
            oldTrainArr.push(command[1])
        } else {
            for (let j = 0; j < oldTrainArr.length; j++){
                let sum = Number(oldTrainArr[j]) + Number(command[0])
                if (sum <= maxCap){
                    oldTrainArr[j] = sum
                    break;
                }
            }
        } 
        index++
    }

    console.log(oldTrainArr.join(" "))
}
train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])