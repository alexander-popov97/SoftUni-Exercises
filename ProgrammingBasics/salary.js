function salary(input) {
    let index = 0
    let tabsCount = Number(input[index])
    index++
    let money = Number(input[index])
    index++

    for (let i = 0; i < tabsCount; i++) {
        let name = input[index]
        index++

        switch(name) {
            case "Facebook":
            money -= 150    
            break;
            case "Instagram":
            money -= 100    
            break;
            case "Reddit":
            money -= 50    
            break;
        }
    }
    if (money > 0) { 
        console.log(`${money}`)
    } else {
        console.log(`You have lost your salary.`)
    }

}
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])