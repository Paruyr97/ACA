const container = document.getElementById('container');


const state = {
	faq: [
		{ 
			question: 'I’m completely new to Programming: can I take the courses and become a competitive software engineer.',
			answer: 'Sure you can! Please, consider applying to our introductory courses.'
		},
		{ 
			question: 'How can I participate in the courses?',
			answer: `
				To participate you need to:
				- Register on the web page (after registration you’ll get an email where you
				can find information about the exam test)
				- Take the exam
				- Pass an informal interview with the tutor
				Afterwards you will be enrolled in the course
				`
		},
		{
			question: 'I took the exam. When and how can I know the results?',
			answer: `You will be informed about the results in two weeks after the exam.
				Sometimes it can take us three weeks. If you don’t receive a response, 
				please make sure you check the “Spam” folder of your email account.
				`
		},
		{
			question: 'What if I could not pass the beginner\'s course test?',
			answer: 'If you have not been able to solve the math questions, you can apply for the.'
		},
		{
			question: 'How much do I have to pay for a course?',
			answer: `Depending on what course you choose, the course prices are different. 
				You can learn more about the prices on our website, in separate pages for each given course.
				`
		}

	]
}

function render() {
	for (const item of state.faq) {
		const div = document.createElement('div');

		const button = document.createElement('button');
		button.innerText = '+';
		button.addEventListener('click', () => {
			p.classList.toggle('ans-toggle');
			button.innerText = button.innerText === '-' ? '+' : '-';
		});

		const p = document.createElement('p');
		p.classList.add('ans-toggle');
		p.innerText = item.answer;

		div.innerText = item.question;
		div.appendChild(button);
		div.appendChild(p);
		container.appendChild(div);
	}
}

render();
