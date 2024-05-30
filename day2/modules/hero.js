import { Pson } from "./person.js";

class Hero extends Pson{
    static version = 1001
    title = ""
    firstname = ""
    lastname = ""
    #power = 0
    constructor(ntitle, nfname, nlname, anyability){
        super(anyability);
        this.title = ntitle
        this.firstname = nfname
        this.lastname = nlname
    }
    fullname(){
        return this.firstname+" "+this.lastname
    }
    get power(){
        return this.#power
    }
   
    set power(npower){
        this.#power = npower
    }
};

export { Hero }