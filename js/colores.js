const TEMAS = {
    "original": {
        fondo: "rgb(190, 244, 244)",
        borde: "rgb(183, 136, 226)",
        titulos: "rgb(158, 81, 230)",
        acentos: "rgb(194, 157, 228)",
        h3: "rgba(182, 91, 198, 0.474)"
    },
    "corsa": {
        fondo: "#0b0b0b",
        borde: "#ff3333",
        titulos: "#ff3333",
        acentos: "#1a1a1a",
        h3: "rgba(255, 51, 51, 0.3)"
    },
    "don_kbrn": {
        fondo: "#050505",
        borde: "#d35400",
        titulos: "#f1c40f",
        acentos: "#222222",
        h3: "rgba(211, 84, 0, 0.3)"
    },
    "porque_puedo": {
        fondo: "#080808",
        borde: "#369763",
        titulos: "#369763",
        acentos: "#1a1a1a",
        h3: "rgba(54, 151, 99, 0.3)"
    },
    "sol_maria": {
        fondo: "#fdfcf0",
        borde: "#f39c12",
        titulos: "#e67e22",
        acentos: "#f1c40f",
        h3: "rgba(243, 156, 18, 0.3)"
    },
    "3MEN2_KBRN": {
        fondo: "#080808",
        borde: "#00ff41",
        titulos: "#00ff41",
        acentos: "#1a1a1a",
        h3: "rgba(0, 255, 65, 0.3)"
    },
    "SEN2 KBRN, VOL.2": {
        fondo: "#050505",
        borde: "#D35400",
        titulos: "#D35400",
        acentos: "#111111",
        h3: "rgba(211, 84, 0, 0.3)"
    },
    "Sauce Boyz 2": {
        fondo: "#080808",
        borde: "#FF8C00",
        titulos: "#2ECC71",
        acentos: "#111111",
        h3: "rgba(255, 140, 0, 0.3)"
    },
    "Estilo SEN2 KBRN, VOL.1": {
        fondo: "#050505",
        borde: "#1E90FF",
        titulos: "#1E90FF",
        acentos: "#111111",
        h3: "rgba(30, 144, 255, 0.3)"
    },
    "Monarca": {
        fondo: "#0b0114",
        borde: "#FF00E4",
        titulos: "#00F0FF",
        acentos: "#1a0229",
        h3: "rgba(255, 0, 228, 0.3)"
    },
    "Sauce Boyz Care Package": {
        fondo: "#0d0e0d",
        borde: "#556B2F",
        titulos: "#FF4500",
        acentos: "#1a1b1a",
        h3: "rgba(85, 107, 47, 0.3)"
    },
    "Sauce Boyz": {
        fondo: "#0a0a0a",
        borde: "#F1C40F",
        titulos: "#F1C40F",
        acentos: "#151515",
        h3: "rgba(241, 196, 15, 0.3)"
    }
};

function aplicarColores(idTema) {
    if (!idTema) return;
    
    const tema = TEMAS[idTema] || TEMAS["original"];
    const root = document.documentElement;

    // APLICAMOS A AMBOS NOMBRES PARA QUE FUNCIONE EN TODAS LAS PÁGINAS
    root.style.setProperty('--color-fondo-pagina', tema.fondo);
    
    // Aquí mandamos el color del borde a las dos variables posibles (la de index y la de albumes)
    root.style.setProperty('--color-primario-borde', tema.borde); 
    root.style.setProperty('--color-primario', tema.borde); 

    root.style.setProperty('--color-titulos', tema.titulos);
    
    // Aquí mandamos el color de acentos a las dos variantes
    root.style.setProperty('--color-acentos-bg', tema.acentos);
    root.style.setProperty('--color-acentos', tema.acentos);

    // Aquí mandamos la transparencia a las dos variantes
    root.style.setProperty('--color-acentos-h3', tema.h3);
    root.style.setProperty('--color-acentos-transparente', tema.h3);

    const textoNav = document.getElementById('nav');
    if (textoNav) {
        // Si es Corsa o cualquier tema oscuro, lo ponemos en blanco
        if (idTema === 'corsa' || tema.fondo === '#0b0b0b' || tema.fondo === '#080808') {
            textoNav.style.color = "white";
        } else {
            // Si es el original u otro claro, que use el color de títulos
            textoNav.style.color = "var(--color-titulos)";
        }
    }

    localStorage.setItem('temaActivo', idTema);
}

document.addEventListener('DOMContentLoaded', () => {
    const guardado = localStorage.getItem('temaActivo');
    if (guardado) {
        aplicarColores(guardado);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const eladioDog = document.getElementById('eladio-dog');

    if (eladioDog) {
        eladioDog.addEventListener('click', () => {
            document.body.style.backgroundColor = 'black';
            document.body.style.transition = '0.3s';
            
            setTimeout(() => {
                window.location.href = "../login.html"; 
            }, 300);
        });
    }
});