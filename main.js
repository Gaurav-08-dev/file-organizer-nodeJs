#!/usr/bin/env node

let inputArr = process.argv.slice(2);


let helpObject=require("./commands/help");
let treeObject=require("./commands/tree");
let organizeObject=require("./commands/organize.js");

// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help 

let command = inputArr[0];

switch (command) {
    case "tree":
        treeObject.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObject.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObject.helpKey();
        break;
    default:
        console.log("Please! Input correct command! 🙄")
        break;
}

 

