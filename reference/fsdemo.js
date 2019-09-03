const fs=require('fs');
const path=require('path');

//create folder
// fs.mkdir(path.join(__dirname,'/test'),{},function(err){
//     if(err) throw err;
//     console.log('folder created');
// });

// write and append text 
// fs.writeFile(
//     path.join(__dirname,'/test','hello.txt'),
//     'hello world', 
//     err => {
//         if (err) throw err;
//         console.log('file written');

//         fs.appendFile(
//             path.join(__dirname,'/test','hello.txt'),
//             ' written with node', 
//             err => {
//                 if (err) throw err;
//                 console.log('file written again');
//             }
//         )

//     }
// )

// read file
// utf8 allows data access
// fs.readFile(
//     path.join(__dirname, '/test', 'hello.txt'), 
//     'utf8', (err,data) => {
//         if(err) throw err;
//         console.log(data);
//     }
// );

// rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'renamed.text'), 
    (err,data) => {
        if(err) throw err;
        console.log("file was renamed");
    }
);