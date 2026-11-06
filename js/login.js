// =========================================
// 1. CONFIGURACIÓN Y ESTADO GLOBAL
// =========================================
const PAGINA_INICIO = "html/index.html"; 

window.onload = function() {
    console.log("Sistema de acceso listo.");
    
    // Recuperar fondo guardado al cargar la página (desde colores.js)
    const fondoGuardado = localStorage.getItem('fondoGlobal');
    if (fondoGuardado && typeof setStyles === 'function') {
        setStyles(fondoGuardado);
    }

    // Detectar errores de login desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('error') === 'usuario_incorrecto') {
        const confirmar = confirm("Usuario o contraseña incorrectos.\n\n¿Quieres crear una cuenta nueva?");
        if (confirmar) mostrarRegistro();
        window.history.replaceState({}, document.title, window.location.pathname);
    }
};

// =========================================
// 2. NAVEGACIÓN ENTRE PANTALLAS
// =========================================

function mostrarRegistro() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('register-screen').classList.remove('hidden');
}

function mostrarLogin() {
    document.getElementById('register-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

// Función activada al hacer clic en la llave 🔑
function abrirAdmin() {
    const pass = prompt("Introduce clave de desarrollador:");
    if (pass === "dev2026") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('dev-panel').classList.remove('hidden');
    } else if (pass !== null) {
        alert("Acceso denegado.");
    }
}

// =========================================
// 3. PANEL DE CONTROL (COLORES)
// =========================================

function actualizarPrevisualizacion(estilo) {
    const preview = document.getElementById('preview-box');
    if (!preview) return;

    let color;
    switch(estilo) {
        case 'original': color = "rgb(183, 136, 226)"; break;
        case 'corsa': color = "#ff3333"; break;
        case 'don_kbrn': color = "#f1c40f"; break;
        case 'porque_puedo': color = "#369763"; break;
        case 'sol_maria': color = "#f39c12"; break;
        case '3MEN2_KBRN': color = "#00ff41"; break;
        default: color = "transparent";
    }
    
    preview.style.backgroundColor = color;
    preview.style.boxShadow = color !== "transparent" ? `0 0 15px ${color}88` : "none";
    preview.style.border = color !== "transparent" ? `2px solid white` : "1px solid rgba(255,255,255,0.2)";
}

function guardarYSalir() {
    const selector = document.getElementById('bg-selector');
    const valorTema = selector.value;

    if (!valorTema) {
        alert("Selecciona un estilo antes de aplicar.");
        return;
    }

    localStorage.setItem('fondoGlobal', valorTema);
    
    // Si tienes el script colores.js cargado
    if (typeof aplicarColores === 'function') {
        aplicarColores(valorTema);
    }

    // Efecto de salida hacia el inicio
    document.getElementById('dev-panel').style.opacity = "0";
    setTimeout(() => {
        window.location.href = PAGINA_INICIO;
    }, 500);
}