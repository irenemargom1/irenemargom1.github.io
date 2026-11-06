// Seleccionamos todos los álbumes (las etiquetas figure)
const albumes = document.querySelectorAll('figure');

albumes.forEach(album => {
    album.addEventListener('click', () => {
        // Buscamos el contenedor interno y le aplicamos el giro
        const inner = album.querySelector('.card-inner');
        
        // Si ya está girado, lo vuelve a su sitio, si no, lo gira
        if (inner.style.transform === "rotateY(180deg)") {
            inner.style.transform = "rotateY(0deg)";
        } else {
            inner.style.transform = "rotateY(180deg)";
        }
    });
});