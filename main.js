const toggle = document.getElementsByTagName('nav')[0];
const hm = document.getElementsByClassName('hamburger')[0];
const icon = document.getElementsByClassName('icon')[0];
const moreLess = document.getElementById('showMore');
const gallery = document.getElementsByClassName('gallery')[0];
const more = document.getElementById('more');
const less = document.getElementById('less');

hm.addEventListener('click', () => {
    toggle.classList.toggle('dropdown');
    icon.classList.toggle('dropdown');
} );

moreLess.addEventListener('click', () => {
    gallery.classList.toggle('flex');
    more.classList.toggle('flex');
    less.classList.toggle('flex');
});