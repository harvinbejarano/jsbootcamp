let students = [
    { name: 'Jhon', score1: 47, score2: 46 },
    { name: 'Bob', score1: 23, score2: 24 },
    { name: 'Nick', score1: 40, score2: 35 },
    { name: 'Alex', score1: 44, score2: 45 }
];
let degrees = ['A', 'B', 'C', 'D', 'E'];
let limits = [91, 81, 71, 61, 51];

function calcularStudentTotalScore(student) {
    return student.score1 + student.score2;
}

function calculateStudentResult(finalScore) {
    let degreeResult = '';
    for (let i = 0; i < limits.length; i++){
        if (finalScore >= limits[i]) {
            degreeResult = 'Passed final Exam and got degree ' + degrees[i];
            break;
        }
    }
    if (degreeResult.length === 0) degreeResult = 'fail and has to try next year';

    return degreeResult;
}

for (let i = 0; i < students.length; i++){
    let studentScore = calcularStudentTotalScore(students[i]);
    let degreeResult = calculateStudentResult(studentScore);

    console.log(students[i].name + ' has ' + studentScore + ' total score; ' + ' he ' + degreeResult);
  
}   

students.forEach((item) => {
    console.log(item);
});


