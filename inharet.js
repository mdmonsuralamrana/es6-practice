class Parent {
    constructor(parent){
        this.parent = parent;
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name ;
    }
    getFullName(){
        return this.name + " " + this.parent ;
    }
}
const baby = new Child ('Abraham');
const baby2 = new Child("Fuad")
console.log(baby2);