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
        this.catchPhrase = instAttributes.catchPhrase;
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
        console.log(this.favSubjects.toString());
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
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
    age: 32,
    favLanguage: 'JavaScript',
    specialty: 'FSW',
    catchPhrase: `Don't listen to Rosie`
});

const joshKnell = new Instructor({
    name: 'Josh Knell',
    location: 'Georgia?',
    age: 31,
    favLanguage: 'Ruby',
    specialty: 'banjo',
    catchPhrase: `You got this!`
});

const avni = new Student({
    name: 'Avni Patel Thompson',
    location: 'Seattle',
    age: 28,
    className: 'WEB21',
    previousBackground:`Founder & CEO of Poppy`,
    favSubjects: ['Node.js', 'Summer Hackers', 'Array methods'],
});

const virginia = new Student({
    name: 'Virginia Thayer',
    location: 'Seattle',
    age: 36,
    previousBackground: 'User Operations at Stripe',
    className: 'WEB21',
    favSubjects: ['LESS', 'JavaScript', 'Pseudo-classical inheritance']
});

const joshuaSmoot = new ProjectManager({
    name: 'Joshua Smoot',
    age: 26,
    location: 'Charleston',
    favInstructor: 'Josh Knell',
    gradClassName: 'WEB17'
});

const mary = new ProjectManager({
    name: 'Mary',
    age: 24,
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Python',
    catchPhrase: "That looks AWESOME",
});

console.log(joshuaSmoot.gradClassName);
console.log(mary.favInstructor);
console.log(mary.favLanguage);
console.log(danLevy.catchPhrase);
joshKnell.demo('JavaScript');
danLevy.grade(virginia, 'Class Constructors');
joshuaSmoot.standUp('#web21_Smoot');
avni.speak();
virginia.PRAssignment('JavaScript IV');
joshKnell.speak();
virginia.sprintChallenge('LESS');
mary.grade(avni, 'HTML');
avni.listsSubjects();

