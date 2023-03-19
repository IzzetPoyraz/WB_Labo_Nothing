const toggle = document.getElementsByTagName('nav')[0];
const hm = document.getElementsByClassName('hamburger')[0];
const icon = document.getElementsByClassName('icon')[0];

hm.addEventListener('click', () => {
    toggle.classList.toggle('dropdown');
    icon.classList.toggle('dropdown');
} )