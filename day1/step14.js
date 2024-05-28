class Hero{
    static version = 1001;
    title = "";
    firstname = "";
    lastname = "";
    #power = 0
    constructor(ntitle, nfname, nlname){
        this.title = ntitle;
        this.firstname = nfname;
        this.lastname = nlname;
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get power(){
        return this.#power;
    }
    set power(npower){
        this.#power = npower;
    }
};

let hero1 = new Hero("Ironman","Tony", "Stark");
let hero2 = new Hero("Captain America","Steve", "Rogers");
/* hero2.fullname = function(){
    return "hero2's private full name method";
} */

console.log(hero1.title);// Ironman
console.log(hero2.title);// Captain America
console.log(hero1.fullname());// 
console.log(hero2.fullname());// 
console.log(hero1.fullname === hero2.fullname);//true 

let favnums = [8,6,7,5,2];