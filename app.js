const courseContainer = document.getElementsByClassName('courseContainer');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const Grade = document.getElementById('Grade');
const CreditHour = document.getElementById('creditHr');
const calculateBtn = document.getElementById('calculateBtn');
let userInput = document.getElementById('userInput');
 

addSubjectBtn.addEventListener('click', function() {
    let originalCourseDiv = document.querySelector('.courseContainer');
    let clonedCourseDiv = originalCourseDiv.cloneNode(true);
    userInput.appendChild(clonedCourseDiv);
    
});

calculateBtn.addEventListener('click', function() {
    
});