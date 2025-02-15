/*header scroll animation*/

const header = document.getElementById('header');

function toggleHeaderOnScroll() {
    if (window.scrollY > 150) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', toggleHeaderOnScroll);