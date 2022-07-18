function tseamAccount(array) {
    let petersAcc = array[0];
    petersAcc = petersAcc.split(" ");
    let petersAccLength = petersAcc.length;
    for(let execute = 1; execute < array.length; execute++) {
      if(array[execute] === "Play" || array[execute] === array.length - 1){
        break;
      }
      let currCommand = array[execute].split(" ");
      switch (currCommand[0]) {
        case "Install":
          if (petersAcc.includes(currCommand[1])) {
            continue;
          } else {
            petersAcc.push(currCommand[1]);
          }
          break;
        case "Uninstall":
          for (let i = 0; i < petersAccLength; i++) {
            if (petersAcc[i] === currCommand[1]) {
              let uninstall = petersAcc.splice(i, 1);
            }
          }
          break;
        case "Update":
          for (let i = 0; i < petersAccLength; i++) {
            if (currCommand[1] === petersAcc[i]) {
              let temp = petersAcc.splice(i, 1);
              temp = temp.join();
              petersAcc.push(temp);
            }
          }
          break;
        case "Expansion":
          let splitGameAndExpansion = currCommand[1].split("-");
          for (let i = 0; i < petersAccLength; i++) {
            if (splitGameAndExpansion[0] === petersAcc[i]) {
              let addingGameExpansion = petersAcc.splice(
                i + 1,
                0,
                `${splitGameAndExpansion[0]}:${splitGameAndExpansion[1]}`
              );
            }
          }
          break;
      }
    }
    console.log(petersAcc.join(" "));
  }
tseamAccount()