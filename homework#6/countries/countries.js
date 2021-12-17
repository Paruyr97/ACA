const BASE_URL = 'https://restcountries.com/';
const input = document.querySelector('#search');
const btn = document.querySelector('#search-btn');
const container = document.querySelector('#container');
const myModal = document.querySelector('#myModal');

const state = {
	countries: [],
}

async function setState(url) {
	const response = await fetch(url);
	const jsonData = await response.json();
	return jsonData;
}

btn.addEventListener('click', async () => {
	container.textContent = '';
	const countries = await setState(`${BASE_URL}v3.1/all`);

	for (let country of countries) {
		const name = country.name.common.toLowerCase().trim();
		if (!name.startsWith(input.value.toLowerCase())) {
			continue;
		}
		const div = document.createElement('div');
		div.classList.add('counrty-info');
		const nameField = document.createElement('p');
		const img = document.createElement('img');
		img.src = country.flags.svg;
		nameField.innerText = name;
		const aboutButton = document.createElement('button');
		aboutButton.innerText = 'About';
		aboutButton.style.display = 'block';
		aboutButton.addEventListener('click', () => {
			myModal.classList.add('hideModal');
			myModal.innerHTML = about(name, country.capital, country.name.official);
			
		})
		div.append(nameField, img, aboutButton);
		container.append(div);
	}
	input.value = '';
});

function hideModal() {
	myModal.classList.remove('hideModal');
}

function about(name, capital, officialName) {
	return `
		<div class="modal-content">
		    <span id="close" class="close" onclick="hideModal()">&times;</span>
		    <p>${name}</p>
		    <p>Capital - ${capital}</p>
		    <p>OfficialName - ${officialName}</p>
		 </div>
	`;
}
