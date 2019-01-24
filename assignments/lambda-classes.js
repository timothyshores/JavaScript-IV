// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} `);
    }
}

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}'`);
    }
    changeGrade(student) {
        let changeGradeBy = Math.floor(Math.random() * Math.floor(10)) * (Math.random() < 0.5 ? -1 : 1)
        student.grade += changeGradeBy;
        console.log(`${this.name} changed ${student.name}'s grade by ${changeGradeBy} points`);
    }
}

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = 90;
    }
    listSubjects() {
        this.favSubjects.forEach(subject => console.log(`${subject}`));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel} @channel it's time for stand up!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//Instantiate Objects using class constructors
const austenAllred = new Person({
    name: 'Austen',
    location: 'Utah'
});

const ashtonKutcher = new Person({
    name: 'Ashton',
    location: 'Hollywood'
});

const timothyShores = new Student({
    name: 'Timothy',
    age: 29,
    location: 'Chicago',
    gender: 'Male',
    previousBackground: 'Marketing',
    className: 'Web17',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']
});

const javontayMcElroy = new Student({
    name: 'Javontay',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']

});

const justinDavis = new Student({
    name: 'Justin',
    favSubjects: ['HTML', 'CSS', 'LESS', 'Javascript']
});

const joshKnell = new Instructor({
    name: 'Josh',
    gender: 'Male',
    specialty: 'Front-end web development',
    favLanguage: 'Javascript',
    catchPhrase: 'Banjo'
});

const ryanHamblin = new Instructor({
    name: 'Ryan',
    location: 'Utah',
    gender: 'Male',
    specialty: 'Full-Stack web development',
    favLanguage: 'Javascript'
});

const joeBugajski = new ProjectManager({
    name: 'Joe',
    gender: 'Male',
});

const ryanBorgis = new ProjectManager({
    name: 'Ryan',
    gender: 'Male',
});

// Console.log Tests
console.log('Person Tests');
austenAllred.speak();
ashtonKutcher.speak();
console.log('');

console.log('Student Tests - Timothy Shores ');
timothyShores.listSubjects();
timothyShores.PRAssignment('Javascript IV');
timothyShores.sprintChallenge('Javascript IV');
console.log('');

console.log('Student Tests - Javontay McElroy ');
javontayMcElroy.listSubjects();
javontayMcElroy.PRAssignment('Javascript III');
javontayMcElroy.sprintChallenge('Javascript III');
console.log('');

console.log('Student Tests - Justin Davis ');
justinDavis.listSubjects();
justinDavis.PRAssignment('Javascript II');
justinDavis.sprintChallenge('Javascript II');
console.log('');

console.log('Instructor Tests - Josh Knell');
joshKnell.demo('Javascript');
joshKnell.grade(timothyShores, "Javscript IV");
console.log('');

console.log('Instructor Tests - Ryan Hamblin');
ryanHamblin.demo('Javascript');
ryanHamblin.grade(timothyShores, "Javscript IV");
console.log('');

console.log('Project Manager Tests - Ryan Borgis');
ryanBorgis.standUp('#web17_ryan');
ryanBorgis.debugsCode(timothyShores, 'Javascript IV');
console.log('');

console.log('Strech Problem');
joshKnell.changeGrade(timothyShores);
joshKnell.changeGrade(timothyShores);
joshKnell.changeGrade(timothyShores);
joshKnell.changeGrade(timothyShores);
joshKnell.changeGrade(timothyShores);
joshKnell.changeGrade(timothyShores);