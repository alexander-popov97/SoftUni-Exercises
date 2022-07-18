function lunchBreak(input){
 
    let showName = input[0]
    let episodeDuration = Number(input[1])
    let breakDuration = Number(input[2])
    let lunch = breakDuration * 0.125// 1/8
    let rest = breakDuration * 0.25
    let freeTime = breakDuration - lunch - rest
    let diff = Math.abs(freeTime - episodeDuration)
 
    if (freeTime >= episodeDuration){
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(diff)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(diff)} more minutes.`)
    }
}