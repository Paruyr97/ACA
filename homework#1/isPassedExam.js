function isPassed(examResults) {
    let sum = 0;
    let passedCount = 0;

    examResults.forEach(examResult => {

        sum += examResult;

        if(examResult >= 40) {
            passedCount += 1;
        }
    });

    const average = sum / 3;

    if (average >= 50 && passedCount >= 2 || passedCount === 3 ) {
        return 'Passed';
    }
    
    return 'Not passed';
}
