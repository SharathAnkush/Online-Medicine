const navslide = () => {
    const burger = document.querySelector('.bur');
    const nav = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('burgeranimetion')
    });
}

navslide();