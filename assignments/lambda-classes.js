// CODE here for your Lambda Classes

/////////////////////////////
// First build the classes //
/////////////////////////////

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instAttributes) {
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studAttributes) {
        super(studAttributes);
        this.previousBackground = studAttributes.previousBackground;
        this.className = studAttributes.className;
        this.favSubjects = studAttributes.favSubjects;
    }

    listsSubjects() {
        // logs out each item of the student's favoriteSubjects array, one by one.
        // let favSubj = this.favSubjects.forEach(function(subject) {
        //     return subject;
        //   });
        console.log(this.favSubjects.toString());
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge() {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

////////////////////////////
// Now build some people! //
////////////////////////////

const danLevy = new Instructor({
    name: 'Dan Levy',
    location: 'Denver?',
    age: '32',
    favLanguage: 'JavaScript',
    specialty: 'FSW',
    catchPhrase: `Don't listen to Rosie`
});

const joshKnell = new Instructor({
    name: 'Josh Knell',
    location: 'Georgia?',
    age: '31',
    favLanguage: 'Ruby',
    specialty: 'banjo',
    catchPhrase: `You got this!`
});

const avni = new Student({
    name: 'Avni Patel Thompson',
    location: 'Seattle',
    age: '28',
    favSubjects: ''
});

const virginia = new Student({
    name: 'Virginia Thayer',
    location: 'Seattle',
    age: 36;
    previousBackground: ,
    className: 'WEB21',
    favSubjects: ['LESS', 'JavaScript', 'Pseudo-classical inheritance']
});

