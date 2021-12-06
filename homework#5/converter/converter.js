const dramInp = document.getElementById('dram-inp');
const dollarInp = document.getElementById('dollar-inp');

const course = 484;

dollarInp.addEventListener('keyup', (event) => {
	dramInp.value = +event.target.value * course || '';
});
