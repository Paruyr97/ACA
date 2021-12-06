const button = document.getElementById('upload-btn');
const image = document.getElementById('img');
const input = document.getElementById('img-input');

button.addEventListener('click', (event) => {
	const reader = new FileReader();
    reader.onload = function(){
      image.src = reader.result;
    }
    input.files[0] && reader.readAsDataURL(input.files[0]);
});
