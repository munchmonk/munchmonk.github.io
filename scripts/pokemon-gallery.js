let allImages =    ['meowth.png', 'pikachu.png', 'squirtle.png', 'gengar.png',
					'charmeleon.png', 'gyarados.png', 'snorlax.png'];
let allCaptions =  ['#52 Meowth', '#25 Pikachu', '#7 Squirtle', '#94 Gengar',
					'#5 Charmeleon', '#130 Gyarados', '#143 Snorlax'];
let imgIndex = 0;
let pokemonImage = document.querySelector('img');
let pokemonCaption = document.querySelector('figcaption');


function changeImage() {
	imgIndex = (imgIndex + 1) % allImages.length;
	pokemonImage.setAttribute('src', 'images/' + allImages[imgIndex]);
	pokemonCaption.textContent = allCaptions[imgIndex];
}

pokemonImage.onclick = changeImage;
changeImage();
