const toggle = document.getElementsByTagName('nav')[0];
const hm = document.getElementsByClassName('hamburger')[0];

hm.addEventListener('click', () => {
    toggle.classList.toggle('dropdown');
} )