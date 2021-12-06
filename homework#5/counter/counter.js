const resetBtn = document.querySelector('#reset-btn');
const increaseBtn = document.querySelector('#increase-btn');
const decreaseBtn = document.querySelector('#decrease-btn');
const value = document.querySelector('#value');


const checkButtonDicabled = () => {
	 decreaseBtn.disabled = localStorage.getItem('counter') === '0';
}

const getCounterValue = () => {
	const counter = localStorage.getItem('counter');
	if (!counter) {
		localStorage.setItem('counter', 0);
	}
	return counter || localStorage.getItem('counter');
}

const render = () => {
	checkButtonDicabled();
	value.innerText = getCounterValue();
}

render();

increaseBtn.addEventListener('click', () => {
	let counterValue = getCounterValue();
	counterValue++;
	localStorage.setItem('counter', counterValue);
	render();
});

decreaseBtn.addEventListener('click', () => {
	let counterValue = getCounterValue();
	counterValue--;
	localStorage.setItem('counter', counterValue);
	render();
});

resetBtn.addEventListener('click', () => {
	let counterValue = getCounterValue();
	counterValue = 0;
	localStorage.setItem('counter', counterValue);
	render();
});
