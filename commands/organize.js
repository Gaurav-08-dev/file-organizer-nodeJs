let fs= require("fs");
let path=require("path");
let types=require("../utility");
function organize(dirpath) {
    // console.log("command is for ", dirpath);
    // 1. input -> directory path will be given
    let destination_path;

    if(dirpath===undefined) {
        destination_path=process.cwd();
        return; 
    }
    else{
        let doesExist=fs.existsSync(dirpath);
        if(!doesExist){
            console.log("Path entered doesnt exist 🙁");
            return;
        }
        else{
            // 2. create -> organized_files -> directory
            destination_path=path.join(dirpath,"organized_files");
            if(fs.existsSync(destination_path)===false){
                fs.mkdirSync(destination_path);
            }
        }
    }

    organizeHelper(dirpath,destination_path);
   
}

function organizeHelper(src,dest){
    // 3. check all files -> for extensions present in directory
    let contents=fs.readdirSync(src);
    
    for(let i=0;i<contents.length;i++){
        let contentAddress=path.join(src,contents[i]);
        let isFile=fs.lstatSync(contentAddress).isFile();
        if(isFile){
            //  console.log(contents[i]);

            let category= getCategory(contents[i]);
            console.log(contents[i], " belongs to -> ",category);

            // 4 copy / cut files to that organized directory inside of any category folder

            sendFiles(contentAddress,dest,category);
            }
    }
}

function getCategory(name) {
    let ext =path.extname(name);
    ext=ext.slice(1);
    for(let type in types){
        let currTypeArray=types[type];
        for(let i=0;i<currTypeArray.length;i++){
            if(ext===currTypeArray[i]){ return type;}
        }
    }
    return "others! 😯";
}

function sendFiles(src,dest,category){
    let categoryPath= path.join(dest,category);
    if(fs.existsSync(categoryPath)===false){
        fs.mkdirSync(categoryPath);
    }

    let fileName=path.basename(src);
    let destFilePath=path.join(categoryPath,fileName);
    fs.copyFileSync(src,destFilePath);
    console.log(fileName, " copied to ", category);
    fs.unlinkSync(src);
}

module.exports= {
    organizeKey:organize
}