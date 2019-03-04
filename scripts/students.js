const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

//This is used to select the query #container and stored in the variable studentContainer
const studentContainer = document.querySelector("#container")

//for loop to determine students' grade and then style them appropriately
for (const student of students) {
    //studentComponent is temporary container, initialize it as a blank string.
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = `<div class='student'>
        <h1 class='xx-large passing'>${student.name}</h1>
        <section class='bordered dashed section--padded'>${student.subject}</section>
        <aside class='pushRight'>${student.info}</aside></div>` //use `` for changing styles
    } else {
        studentComponent = `<div class='student'>
        <h1 class='xx-large failing'>${student.name}</h1>
        <section class='bordered dashed section--padded'>${student.subject}</section>
        <aside class='pushRight'>${student.info}</aside></div>` //use `` for changing styles
    }
    
    //use .innerHTMl to display the students' grades.  use += to prevent from overwriting 
    //previous students.
    studentContainer.innerHTML += studentComponent
}