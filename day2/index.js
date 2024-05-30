import { Hero } from "./modules/hero.js";

let hero1 = new Hero("Ironman","Tony", "Stark", "I can fly");
let hero2 = new Hero("Captain America","Steve", "Rogers", "I can run");
console.log(hero1.title);// Ironman
console.log(hero2.title);// Captain America
console.log(hero1.fullname());// 
console.log(hero2.fullname());// 
console.log(hero1.fullname === hero2.fullname);//true 
