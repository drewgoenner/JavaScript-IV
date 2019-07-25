// CODE here for your Lambda Classes
class Person {
    constructor(persAtts) {
        this.name = persAtts.name,
        this.age = persAtts.age,
        this.location = persAtts.location
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instAtts) {
        super(instAtts);
        this.specialty = instAtts.specialty,
        this.favLanguage = instAtts.favLanguage,
        this.catchPhrase = instAtts.catchPhrase
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score in ${subject}`);
    }
    applyGrade(student) {
        if (Math.random() > .5) {
            student.currGrade -=Math.round(Math.random() *5 )
        } else {
            student.currGrade += Math.round(Math.random() * 5)
        }
    }
}


class Student extends Person {
    constructor(studAtts) {
        super(studAtts);
        this.previousBackground = studAtts.previousBackground,
        this.className = studAtts.className,
        this.favSubjects = studAtts.favSubjects,
        this.currGrade = studAtts.currGrade
    }
    graduate(gradAmt) { 
        if (this.currGrade >= 70) {
            console.log(`You graduated, ${this.name}!`);
        }
        else {
            console.log(`${this.name}, keep trying!`);
        }
    }
    listsSubjects() {
        console.log(`${this.name}'s favorite subjects are:`);
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun a Sprint Challenge for ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMAtts) {
        super(PMAtts);
        this.gradClassName = PMAtts.gradClassName,
        this.favInstructor = PMAtts.favInstructor
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const betty = new Student({
    name: 'Betty',
    location: 'Bedrock',
    age: 19,
    previousBackground: 'None',
    className: 'Web22',
    favSubjects: ['JS', 'CSS', 'HTML', 'Judo'],
    currGrade: 69
  });

  const barney = new ProjectManager({
      name: 'Barney',
      location: 'Bedrock',
      age: 39,
      favLanguage: 'Caveman',
      specialty: 'Crane',
      catchPhrase: 'Heeheeheehee',
      gradClassName: 'Doofus Extrimus',
      favInstructor: 'Fred'
  })

  fred.demo('HTML');
  fred.grade(betty, 'english');
  betty.listsSubjects();
  betty.speak();
  barney.standUp(22);
  barney.debugsCode(betty, 'english');
  betty.PRAssignment(CSS);
  betty.sprintChallenge('JS-IV');
  

  fred.applyGrade(betty);
  console.log(betty.currGrade);
  betty.graduate();

