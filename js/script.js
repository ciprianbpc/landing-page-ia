document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    // Obtiene la altura de la barra de navegación para el cálculo del scroll
    const navbarHeight = document.querySelector('nav').offsetHeight;

    // Itera sobre cada enlace de navegación para añadir el evento de click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace
            const targetId = this.getAttribute('href'); // Obtiene el ID del objetivo
            const targetElement = document.querySelector(targetId); // Selecciona el elemento objetivo

            // Si el elemento objetivo existe, realiza el scroll suave
            if (targetElement) {
                // Calcula la posición del objetivo, ajustando por la altura de la barra de navegación
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Habilita el desplazamiento suave
                });
            }
        });
    });

    // Selecciona los elementos del formulario lateral
    const sidebarForm = document.getElementById('sidebar-form');
    const sidebarPanel = sidebarForm.querySelector('.sidebar-panel');
    const sidebarOverlay = sidebarForm.querySelector('.sidebar-overlay');
    // Selecciona todos los botones que abren el formulario
    const openFormBtns = document.querySelectorAll('.open-form-btn');

    // Función para abrir la barra lateral del formulario
    function openSidebar() {
        sidebarForm.classList.remove('hidden'); // Hace visible el contenedor principal
        setTimeout(() => {
            sidebarOverlay.classList.remove('opacity-0');
            sidebarOverlay.classList.add('opacity-100'); // Muestra el overlay
            sidebarPanel.classList.remove('translate-x-full');
            sidebarPanel.classList.add('translate-x-0'); // Desliza el panel
        }, 10); // Pequeño retardo para asegurar que la clase 'hidden' se remueva antes de la transición
    }

    // Función para cerrar la barra lateral del formulario (global para onclick en HTML)
    window.closeSidebar = function() {
        sidebarOverlay.classList.remove('opacity-100');
        sidebarOverlay.classList.add('opacity-0'); // Oculta el overlay
        sidebarPanel.classList.remove('translate-x-0');
        sidebarPanel.classList.add('translate-x-full'); // Desliza el panel fuera de la vista
        setTimeout(() => {
            sidebarForm.classList.add('hidden'); // Oculta completamente el contenedor después de la transición
        }, 300); // Espera a que termine la transición (0.3s)
    }

    // Añade el evento de click a todos los botones que abren el formulario
    openFormBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto
            openSidebar(); // Llama a la función para abrir el formulario
        });
    });
});
