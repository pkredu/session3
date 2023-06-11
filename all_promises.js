const fs = require('fs');
const util = require('util');
var read = util.promisify(fs.readFile);


Promise.all([
    read('info1.txt'),
    read('info2.txt')
])
.then(data =>{
    const [data1,data2] = data;
    console.log(data1.toString());
    console.log(data2.toString());
})