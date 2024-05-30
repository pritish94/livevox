class Person{
    ability = "i can walk";
    constructor(nability){
        this.ability = nability;
    }
}
// alias export
export { Person  as Pson }

// named export
// export { Person }