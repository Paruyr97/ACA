function sumOfSequence(n) {
    
    const numerator = 1;
    let denominator = 1;
    let sum = 1;

    for(let i = 1; i < n; i++) {
        denominator += 2;
        sum += (i % 2 ? -numerator/denominator : numerator/denominator); 
    }

    return sum;
}
