// operating system 
const os = require('os');

// platform
console.log(os.platform());

// cpu arch, cpu, memory
console.log(os.arch);
console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.homedir());
console.log(os.uptime());