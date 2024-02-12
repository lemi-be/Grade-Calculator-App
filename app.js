// All the Course Container
const courseContainer = document.getElementsByClassName('courseContainer');
// A button to add more subjects
const addSubjectBtn = document.getElementById('addSubjectBtn');
// To get the Sudents Grade
const Grade = document.getElementById('Grade');
// To get the subjects Credit Hour
const CreditHour = document.getElementById('creditHr');
// The Calculate Button
const calculateBtn = document.getElementById('calculateBtn');
// This contains all the user input field
let userInput = document.getElementById('userInput');
 
// function to add more functions
addSubjectBtn.addEventListener('click', function() {
    let originalCourseDiv = document.querySelector('.courseContainer');
    let clonedCourseDiv = originalCourseDiv.cloneNode(true);
    userInput.appendChild(clonedCourseDiv);
    
});

// function to calculate the GPA
calculateBtn.addEventListener('click', function() {
    
});