const btns = document.querySelectorAll('.list1 li');
const box = document.querySelector('.box');
console.dir(btns[0]);
btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'pink';
});
btns[1].addEventListener('click', () => {
	box.style.width = '100px';
});
btns[2].addEventListener('click', () => {
	box.style.marginLeft = '300px';
});
btns[1].addEventListener('click', () => {
	console.log(getComputedStyle(box).width);
	console.log(getComputedStyle(box).backgroundColor);
});
