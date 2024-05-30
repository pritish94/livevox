let fs = require("node:fs");
/* 
fs.writeFileSync
fs.writeFile
fs.readFile
fs.readFileSync
fs.watchFile 
*/

/* 
*/
setInterval(function(){
    fs.writeFileSync("data/temp.txt"," welcome to your life \n",{flag : "a", encoding : "utf-8"});
    // console.log("file is updated"); 
},2000)

// callback
/* fs.writeFile(
    "data/temp.txt",
    "welcome to your life, there is no turning back","utf-8",
    function(error){
        if(error){
            console.log(error.code)
        }else{
            console.log("file is ready")
        }
    }) 
*/

// console.log(fs.readFileSync("data/temp.txt","utf-8"));

/* 
fs.readFile("data/temp.txt","utf-8",function(error,data){
    if(error){
        console.log(error.code)
    }else{
        console.log(data)
    }
}); 
*/


fs.watchFile("data/temp.txt",function(currentData, previousData){
    console.log("Old data was ",previousData.size.toString());
    console.log("New data is ",currentData.size.toString());
})