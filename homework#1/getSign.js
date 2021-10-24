function checkAge(age, ageType){
    if(ageType === 'months') { return 'child'; }

    if(age >= 1 && age <= 2) { return 'toddler'; }
    else if(age >= 3 && age <= 12) { return 'child'; }
    else if(age >= 13 && age <= 19) { return 'teenager'; }
    else { return 'adult'; }
}
