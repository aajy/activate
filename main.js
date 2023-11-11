const video = document.querySelector('video');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');

playBtn.addEventListener('click', () => {
	video.play();
});
pauseBtn.addEventListener('click', () => {
	video.pause();
});
