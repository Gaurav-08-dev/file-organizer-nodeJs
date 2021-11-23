#!/usr/bin/env node

let inputArr = process.argv.slice(2);


let helpObject=require("./commands/help");
let treeObject=require("./commands/tree");
let organizeObject=require("./commands/organize.js");


// let types = {
//     media: ["mp4", "mkv"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['log','ini','rtf','docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['exe', 'dmg', 'pkg', "deb"],
//     programming: ['cpp','py','js','jsx','java'],
//     images:['png','jpeg','jpg']
// }
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

 

