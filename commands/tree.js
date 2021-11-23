let fs= require("fs");
let path=require("path");
function treeFn(dirpath) {
    // let destPath;
    if(dirpath===undefined){
        treeHelper(process.cwd(),"");
        return ;
    }
    else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist){
            treeHelper(dirpath,"");
        }
        else{
            console.log("Kindly enter the correct path");
            return;
        }
    }
}

function treeHelper(dirpath,indent) {
    
    // check is file or folder

    let isFile=fs.lstatSync(dirpath).isFile();
    if(isFile){ let fileName=path.basename(dirpath);
    console.log(indent + "├── " + fileName);}
    else{
        let directoryName=path.basename(dirpath);
        console.log(indent + "└── " + directoryName);
        let childern=fs.readdirSync(dirpath);
        for(let i=0;i<childern.length;i++){
            let childPath=path.join(dirpath,childern[i]);
            treeHelper(childPath,indent+"\t");
        }
    }
}

module.exports={
    treeKey:treeFn
}