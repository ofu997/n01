const fs=require('fs');
const path=require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{},function(err){
//     if(err) throw err;
//     console.log('folder created');
// });

// write file (auto creates)

fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world',err=>{
    if (err) throw err;
    console.log('file written');
})