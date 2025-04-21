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

// service

// Optional: icon hover animation (if needed)
document.querySelectorAll('.circle').forEach(circle => {
	circle.addEventListener('mouseenter', () => {
		circle.style.transform = 'rotate(180deg)';
	});
	circle.addEventListener('mouseleave', () => {
		circle.style.transform = 'rotate(0deg)';
	});
});

// Resume

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		tabs.forEach(t => t.classList.remove('active'));
		contents.forEach(c => c.classList.remove('active'));

		tab.classList.add('active');
		document.getElementById(tab.dataset.tab).classList.add('active');
	});
});
