window.addEventListener('load', () => {
    const nav = document.querySelector('nav');
    const body = document.body;
    
    // Ahora navTop tendrá el valor real porque la página ya cargó
    const navTop = nav.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.scrollY >= navTop) {
            nav.classList.add('sticky');
            nav.classList.add('compacto');
        } else {
            nav.classList.remove('sticky');
            nav.classList.remove('compacto');
        }
    });
});