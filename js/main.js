const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		// activation(btns, idx);
		// activation(boxs, idx);
		if (btns[idx].classList.contains('on')) return;
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});
function activation(arr, index) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[index].classList.add('on');
}

//클릭한 버튼요소에on이 있으면 return,
