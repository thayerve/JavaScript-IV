// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }

    speak(){
        console.log(`Hello my name is ${this.name}`, I am from ${this.location});
    }
}

class Instructor extends Person {
    constructor(instAttributes){
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
    }
    
    demo(){

    }

    grade() {

    }
}

class Student extends Person {
    constructor(studAttributes){
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
    }

    listsSubjects(){

    }

    PRAssignment(){

    }

    sprintChallenge(){

    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(){

    }

    debugsCode(){
        
    }

}