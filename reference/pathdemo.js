const path=require('path');

// gets path
console.log(__filename);
// gets current file name
console.log(path.basename(__filename));
// gets directory name
console.log(path.dirname(__filename));
// file extension (type of file)
console.log(path.extname(__filename));
// create path object (root, dir, base, ext, name)
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
// concatenate paths
console.log(path.join(__dirname,'test','hello.html'));