/* 
let obj = require("./step15-node-intro.js");

console.log(obj.hero.title);
console.log(obj.sayfullname());
console.log(obj.saypower()); 
*/

let Hero = require("./step15-node-intro.js").Hero;

let hero1 = new Hero("Ironman","Tony", "Stark");
let hero2 = new Hero("Captain America","Steve", "Rogers");

console.log(hero1.title);// Ironman
console.log(hero2.title);// Captain America
console.log(hero1.fullname());// 
console.log(hero2.fullname());// 
console.log(hero1.fullname === hero2.fullname);//true 