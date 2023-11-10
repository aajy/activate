const btns = document.querySelectorAll('.list1 li');
console.dir(btns);

btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		console.log(`button ${index + 1}을 클릭했습니다.`);
	});
});
