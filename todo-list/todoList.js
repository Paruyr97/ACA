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
	const removeIcon = document.createElement('I');
	removeIcon.classList.add('far', 'fa-trash-alt');
	listItem.appendChild(removeIcon);
	removeIcon.addEventListener('click', () => {
		removeIcon.parentNode.remove();
	})
});
