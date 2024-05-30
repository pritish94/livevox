let EventEmitter = require("node:events").EventEmitter;
let voxevent = new EventEmitter();
let voxlistener = function(){
    console.log("vox event happened");
};
voxevent.addListener("vox", voxlistener);
/* 
setTimeout(function(){
    voxevent.emit("vox");
},2000) 
*/
let si = setInterval(function(){
    voxevent.emit("vox");
    console.log("vox event log");
},1000);

setTimeout(function(){
    voxevent.removeListener("vox", voxlistener);
    clearInterval(si);
},10000);

