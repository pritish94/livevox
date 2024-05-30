var hero = {
    title : "Ironman",
    power : 6,
    firstname : "Tony",
    lastname : "stark"
};

function sayfullname(){
    return hero.firstname+" "+hero.lastname;
};

function saypower(){
    return hero.power;
};

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

// commonjs
/* 
module.exports.hero = hero;
module.exports.sayfullname = sayfullname;
module.exports.saypower = saypower; 
*/

/* 
module.exports = {
    hero : hero,
    sayfullname : sayfullname,
    saypower : saypower
}; 
*/

// module.exports = { sayfullname, saypower, Hero };
module.exports = { hero, sayfullname, saypower, Hero };