// let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUsername() {
	let myName = prompt('Please enter your name: ');
	if(!myName) {
		setUsername();
	} else {
		localStorage.setItem('username', myName);
		myHeading.textContent = 'Welcome to my website, ' + myName + '!';
	}
}

/*
if(!localStorage.getItem('username')) {
	setUsername();
} else {
	let storedName = localStorage.getItem('username');
	myHeading.textContent = 'Welcome to my website, ' + storedName + '!';
}

myButton.onclick = setUsername;
*/