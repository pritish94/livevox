let os = require("node:os");
require("./myglobals");

console.log(os.arch());
console.log(os.cpus().length);
console.log(os.availableParallelism());
console.log(os.cpus()[0]);
console.log(os.userInfo().username);
console.log((os.freemem()/1024)/1024,"GB");
console.log((os.totalmem()/1024)/1024,"GB");
console.log(os.totalmem());

console.log(author);
console.log(company);
global.author = "new author";
console.log(author);