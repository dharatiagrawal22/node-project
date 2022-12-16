const fs = require('fs');
console.log("this is first file");
console.log("new try");

fs.writeFileSync('data.txt' , 'Hello world!');

fs.appendFileSync('data.txt' , ' i am learning node.js');

const data = fs.readFileSync('data.txt').toString();
console.log(data);

// fs.mkdirSync('projects');

// fs.writeFileSync('projects/value.txt' , 'hii we are making in process');

// const value =fs.readFileSync('projects/value.txt').toString();
// console.log(value);

// fs.renameSync('data.txt' , 'mydata.txt');

// fs.renameSync('projects/value.txt' , 'projects/data.txt');

// fs.unlinkSync('mydata.txt');

// fs.unlinkSync('projects/data.txt');

// fs.rmdirSync('projects');
// fs.unlinkSync('data.txt');