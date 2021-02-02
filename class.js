class students {
    constructor(sId , sName) {
        this.id = sId;
        this.name = sName ;
        this.school = "Ramgarh Govt High School."
    }
}

const student1 = new students(12,"rana");
const student2 = new students(15,"roni");
console.log(student1, student2);