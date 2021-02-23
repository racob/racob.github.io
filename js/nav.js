var isActive = false;

function toggleActive() {
    let menu = document.getElementById('navbar')
    isActive = !isActive;
    isActive ? menu.classList.add('is-active') : menu.classList.remove('is-active');
};

function hideNav() {
    let menu = document.getElementById('navbar')
    isActive = false;
    isActive ? menu.classList.add('is-active') : menu.classList.remove('is-active');
};