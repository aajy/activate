const video = document.querySelector('video');
const h1 = document.querySelector('h1');
const btn = document.querySelector('.button');
const colorBoxbutton = document.querySelectorAll('li');

btn.addEventListener('click', () => {
	let btnText = btn.innerHTML;
	if (btnText === 'pause') {
		video.pause();
		btn.innerHTML = 'play';
	} else {
		video.play();
		btn.innerHTML = 'pause';
	}
});

colorBoxbutton.forEach((el, index) => {
	el.addEventListener('click', () => {
		h1.style.color = getComputedStyle(el).backgroundColor;
	});
});
