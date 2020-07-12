let allImages = ['meowth.png', 'pikachu.png', 'squirtle.png'];
let imgIndex = 0;
let pokemonImage = document.querySelector('img');


function changeImage() {
	imgIndex = (imgIndex + 1) % allImages.length;
	pokemonImage.setAttribute('src', 'images/' + allImages[imgIndex]);
}

pokemonImage.onclick = changeImage;
changeImage()
