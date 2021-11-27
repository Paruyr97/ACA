const input = document.querySelector('#search');
const btn = document.querySelector('#add-btn');
const list  = document.querySelector('#todo-list');

btn.addEventListener('click', function () {
	const listItem = document.createElement('LI');

	if (!input.value.trim()) return;

	listItem.innerText = input.value;
	list.appendChild(listItem);
	input.value = '';
	listItem.classList.add('list-item');
	listItem.addEventListener('click', () => {
		listItem.classList.toggle('done');
	});
	const removeButton = document.createElement('BUTTON');
	removeButton.innerText = 'remove';
	listItem.appendChild(removeButton);
	removeButton.addEventListener('click', () => {
		removeButton.parentNode.remove();
	})
});
