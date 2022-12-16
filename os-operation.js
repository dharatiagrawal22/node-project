
const os =require('os');

const arch = os.arch();
console.log(arch);

const freememory = os.freemem();
console.log(freememory/1024/1024/1024);

const totalmemory = os.totalmem();
console.log(`totalmemory usage  is ${totalmemory/1024/1024/1024} GB`);

const hostname =os.hostname();
console.log(hostname);

const platform = os.platform();
console.log(platform);

const operatingSystem = os.type();
console.log(operatingSystem);