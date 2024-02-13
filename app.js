// All the Course Container
const courseContainer = document.getElementsByClassName('courseContainer');
// A button to add more subjects
const addSubjectBtn = document.getElementById('addSubjectBtn');


const calculateBtn = document.getElementById('calculateBtn');
// To display the calculated Grade
const calculationDisplay = document.getElementById('Calulated');
let yourGrade = document.getElementById('yourGrade');
// This contains all the user input field
let userInput = document.getElementById('userInput');

 
// function to add more functions
addSubjectBtn.addEventListener('click', function() {
    let originalCourseDiv = document.querySelector('.courseContainer');
    let clonedCourseDiv = originalCourseDiv.cloneNode(true);
    userInput.appendChild(clonedCourseDiv);
    
});


function Calculate() {
    // Total Grade 
    let TotalGrade = 0;

    for (i = 0; i < courseContainer.length; i++) {
        // To get the Sudents Grade
        let selectedGrade = courseContainer[i].querySelector('#Grade');
        let FinalGrade = selectedGrade.value;
        
        // To change the Grading format to numbers
        if (selectedGrade.value === 'A+') {
            FinalGrade = 4.0;
        } else if (selectedGrade.value === 'A') {
            FinalGrade = 4.0;
        } else if (selectedGrade.value === 'A-') {
            FinalGrade = 3.7;
        } else if (selectedGrade.value === 'B+') {
            FinalGrade = 3.3;
        } else if (selectedGrade.value === 'B') {
            FinalGrade = 3.0;
        } else if (selectedGrade.value === 'B-') {
            FinalGrade = 2.7;
        } else if (selectedGrade.value === 'C+') {
            FinalGrade = 2.3;
        } else if (selectedGrade.value === 'C') {
            FinalGrade = 2.0;
        } else if (selectedGrade.value === 'C-') {
            FinalGrade = 1.7;
        } else if (selectedGrade.value === 'D+') {
            FinalGrade = 1.3;
        } else if (selectedGrade.value === 'D') {
            FinalGrade = 1.0;
        } else if (selectedGrade.value === 'F') {
            FinalGrade = 0.0;
        } else if (selectedGrade.value === 'NG') {
            FinalGrade = 'NG';
        }
    // Adding the Grades together
        TotalGrade += FinalGrade;
        
       
    }
    
    
    
    for (i = 0; i < courseContainer.length; i++) {
        let CreditHour = courseContainer[i].querySelector('#creditHr')
        let FinalCredit = CreditHour.value;

        console.log(FinalCredit);


    }
    yourGrade.value = TotalGrade;
}

// function to calculate the GPA
calculateBtn.addEventListener('click', function() {
    calculationDisplay.style.display = 'block';
    Calculate();
});