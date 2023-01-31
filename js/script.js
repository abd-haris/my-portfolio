// Toggle classlist active
const navbarList = document.querySelector('.navbar-list');

// ketika hamberger menu di klik
document.querySelector('#humberger-menu').onclick = () => {
	navbarList.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click' , function(e) {
	if (!humberger.contains(e.target) && !navbarList.contains(e.target)) {
		navbarList.classList.remove('active');
	}
});