function rockPaperScissors() {
    const getValidInput = () => {

        const selection = ['rock', 'paper', 'scissors'];
        let input;

        while(true) {
            input = prompt(`please input one of these text ${selection}`).trim().toLowerCase();
            if (selection.includes(input)) {
                break;
            } else {
                alert('invalid input, enter the correct value.')
            }
        }

        return input;
    }

    let input1 = getValidInput();
    let input2 = getValidInput();
    
    if (input1 === input2) {
        alert('Draw! Enter new values.');
        rockPaperScissors();
    } else if (input1 === 'scissors' && input2 === 'paper' ||
        input1 === 'rock' && input2 === 'scissors' ||
        input1 === 'paper' && input2 === 'rock') {
        alert('1st player wins!');
    } else {
        alert('2nd player wins!');
    }
}
