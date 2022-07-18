function phoneShop(arr){
    let phones = arr.shift().split(" ")
    let index = 0
    let command = arr[index].split(" - ")
    index++
    let last = ""
   // while (command !== "End"){

    let r = arr.length
    for (let i = 0; i < r; i++){

        switch(command[0]){
            case 'Add':
            if (phones.includes(command[1] + ",") || phones.includes(command[1])){
                if (arr[index] === "End"){
                    if (last !== ""){
                        phones.push(last)
                        phones[phones.indexOf(last) - 1] += ","
                        }
                    console.log(phones.join(" "))
                    return;
                }
                command = (arr[index]).split(" - ")
                index++
                continue;
            } else {
                phones.push(command[1])
                phones[phones.indexOf(command[1]) - 1] += ","
            }
            break;

            case 'Remove':
            if (phones.includes(command[1]) || phones.includes(command[1]) + ","){
            phones = phones.filter(word => word !== command[1] && word !== command[1] + ",")
            }
            break;

            case 'Bonus phone':
            let bonusPhones = command[1].split(":")
            if (phones.includes(bonusPhones[0])){
                phones.splice(phones.indexOf(bonusPhones[0]) + 1, 0, bonusPhones[1])
                phones[phones.indexOf(bonusPhones[0])] += ","
            } else if (phones.includes(bonusPhones[0] + ",")){
                
                phones.splice(phones.indexOf(bonusPhones[0] + ",") + 1, 0, bonusPhones[1])
                phones[phones.indexOf(bonusPhones[0])] += ","
            }
            break;

            case 'Last':
            if (phones.includes(command[1] + ",")){
                phones.splice(phones.indexOf(command[1] + ","), 1)
                last = command[1]
                //phones.push(command[1])
                //phones[phones.indexOf(command[1]) - 1] += ","
            } else if (phones.includes(command[1])){
                phones.splice(phones.indexOf(command[1]), 1)
                last = command[1]
                //phones.push(command[1])
                //phones[phones.indexOf(command[1]) - 1] += ","

            }
            break;
        }
        if (arr[index] === "End"){
            if (last !== ""){
            phones.push(last)
            phones[phones.indexOf(last) - 1] += ","
            }
            console.log(phones.join(" "))
            return;
            
        }
        command = (arr[index]).split(" - ")
        index++
  //  }
    }
    //let l = phones.length
   /* for (let j = 0; j < l; j++){
        if (phones[j][phones[j].length - 1] === ","){
            phones[j] = phones[j].slice(0, -1)
        }
    } */
    console.log(phones.join(" "))

}
phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG10", "End"])