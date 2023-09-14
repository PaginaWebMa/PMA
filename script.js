// Al cargar la página, mostrar la sección "INICIO"
mostrarSeccion('inicio');

function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('#contenido > div');
    secciones.forEach(function (element) {
        element.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var seccionActual = document.getElementById(seccion);
    seccionActual.style.display = 'block';

    // Actualizar el título y el contenido de la sección en el banner
    document.getElementById('titulo-seccion').textContent = seccionActual.querySelector('h1').textContent;
    document.getElementById('contenido-seccion').textContent = seccionActual.querySelector('h3').textContent;
}

// Manejar clics en los enlaces del banner
document.getElementById('inicio-link').addEventListener('click', function () {
    mostrarSeccion('inicio');
});

document.getElementById('acerca-link').addEventListener('click', function () {
    mostrarSeccion('acerca');
});

document.getElementById('horario-link').addEventListener('click', function () {
    mostrarSeccion('horario');
});

document.getElementById('eventos-link').addEventListener('click', function () {
    mostrarSeccion('eventos');
});

// Detectar el scroll y animar el banner
window.addEventListener('scroll', function () {
    var banner = document.getElementById('banner');
    if (window.scrollY > 0) {
        banner.style.top = '0';
        banner.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else {
        banner.style.top = '-80px';
        banner.style.backgroundColor = 'transparent';
    }
});
