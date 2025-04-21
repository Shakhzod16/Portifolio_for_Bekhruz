const counters = document.querySelectorAll('.count');
const speed = 100; // pastroq bo'lsa, tezroq

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const increment = Math.ceil(target / speed);

		if (count < target) {
			counter.innerText = count + increment;
			setTimeout(updateCount, 40);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
