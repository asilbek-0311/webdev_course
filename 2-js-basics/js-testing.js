// simple javascript program to learn about main dataypes and operators
// and to test the javascript file in the browser console

// 1. Variables and Data Types
var testVar = 1 + '2' + 3;
console.log(testVar); 

//2.Functions
function displayGreeting() {
    console.log('Hello, world!');
}

displayGreeting();

//anonymous function
var displayGreeting2 = function() {
    console.log('Hello, world!');
}
displayGreeting2();

//Assignemtn form js-basics
let allStudents = [ 'A', 'B-', 1, 4, 5, 2 ];
let studentsWhoPass = [];
for (let i = 0; i < allStudents.length; i++) {
    allStudents[i] >= 3 || allStudents[i] <= 'C' ? studentsWhoPass.push(allStudents[i]) : null;
}
console.log(studentsWhoPass);

//creating the loop using while
let studentsWhoPass2 = [];
let i = 0;
while (i < allStudents.length) {
    allStudents[i] >= 3 || allStudents[i] <= 'C' ? studentsWhoPass2.push(allStudents[i]) : null;
    i++;
}
console.log("studentsWhoPass2: " + studentsWhoPass2);
console.log(studentsWhoPass2);

//creating the loop using other methods
studentsWhoPass3 = [];
allStudents.forEach((grade) => grade >= 3 || grade <= 'C' ? studentsWhoPass3.push(grade) : null);
console.log(`studentsWhoPass3: ${studentsWhoPass3}`);

studentsWhoPass4 = allStudents.map((grade) => grade >= 3 || grade <= 'C' ? grade : null);
console.log(`studentWhoPass4: ${studentsWhoPass4}`);

