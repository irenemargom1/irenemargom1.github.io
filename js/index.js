document.addEventListener('DOMContentLoaded', () => {
    // 1. GESTIÓN DE LA PANTALLA DE CARGA (SPLASH)
    const urlParams = new URLSearchParams(window.location.search);
    const procedencia = urlParams.get('vienes_de');

    if (procedencia === 'login' || procedencia === 'registro') {
        const splash = document.getElementById('preview-splash');
        const titulo = splash.querySelector('h1');
        const subtitulo = document.getElementById('selected-theme-name');

        if (splash) {
            // Aseguramos opacidad inicial para la transición
            splash.style.opacity = "0";
            splash.classList.remove('hidden');
            
            // Forzamos un pequeño reflow para que la transición de entrada funcione
            setTimeout(() => {
                splash.style.transition = "opacity 0.5s ease";
                splash.style.opacity = "1";
            }, 10);

            // Personalizamos el mensaje
            if (procedencia === 'login') {
                titulo.innerText = "¡Sesión Iniciada!";
                subtitulo.innerText = "Preparando tu experiencia personalizada...";
            } else {
                titulo.innerText = "¡Bienvenido!";
                subtitulo.innerText = "Estamos configurando tu nueva cuenta...";
            }

            // A los 2.5 segundos, desvanecemos y ocultamos
            setTimeout(() => {
                splash.style.opacity = "0";
                setTimeout(() => {
                    splash.classList.add('hidden');
                    // Limpiamos la URL para que no vuelva a salir al recargar
                    window.history.replaceState({}, document.title, window.location.pathname);
                }, 500); // Espera a que termine la animación de opacidad
            }, 2500);
        }
    }

    // 2. LÓGICA DEL COLLAGE (INTERACCIÓN CON FOTOS)
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            photos.forEach(p => p.style.filter = 'brightness(1)');
            photo.style.filter = 'brightness(1.2) contrast(1.1)';
        });
    });
});

// Función para el botón manual de "Saltar" o "Entrar ahora"
function irAInicio() {
    const splash = document.getElementById('preview-splash');
    if (splash) {
        splash.style.opacity = "0";
        setTimeout(() => {
            splash.classList.add('hidden');
            window.history.replaceState({}, document.title, window.location.pathname);
        }, 500);
    }
}