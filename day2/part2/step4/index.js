let fs = require("node:fs");

let heroTitles = ["Ironman","Thor","Black Widow","Hulk","Captain America"];
let heroCity = ["Bengaluru","Mysore","Hubli","Mangalore","Tumkur"];

function createAHero(){
    return {
        title : heroTitles[Math.ceil(Math.random() * heroTitles.length-1)],
        power : Math.round(Math.random() * 10),
        city : heroCity[Math.ceil(Math.random() * heroCity.length-1)]
    }
};


function addHeroes(){
    fs.writeFile("data/heroes.json",JSON.stringify(tempdata),"utf-8",function(error){
        if(error){
            console.log("Error ", error)
        }else{
            console.log("file is ready")
        }
    })
}


let tempdata;

fs.readFile("data/heroes.json","utf-8",function(error, data){
    if(error){
        console.log("Error is ", error)
    }else{
        console.log(data);
        tempdata = JSON.parse(data);
        console.log(tempdata.heroes);
        for(let i = 0 ; i < 10; i++){
           tempdata.heroes.push( createAHero() );
        };
        addHeroes();
       // console.log(tempdata.heroes.length);

    }
});

/* 
setInterval(function(){
    tempdata.heroes.push( createAHero() );
    console.log(tempdata);
},2000) 
*/
