function quadratic(a, b, c) {

    if (!a * b * c) { return 'enter valid constants'; }

    let d = b**2 - 4*a*c;

    if (d < 0) { return 'Solution does not exists'; }
    
    let x1 = (-b + d**0.5)/(2*a);
    let x2 = (-b - d**0.5)/(2*a);

    return x1 === x2 ? `Solution is ${x1}` : `solutions are ${x1}, ${x2}`;
}
