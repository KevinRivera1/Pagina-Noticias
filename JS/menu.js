/* Menu 1 */
function toggleMenu() {
    const checkbox = document.getElementById("check");
    const barsIcon = document.getElementById("bars");
    const timesIcon = document.getElementById("times");
    const body = document.body;

    const menuOpen = checkbox.checked;

    barsIcon.style.display = menuOpen ? "block" : "none";
    timesIcon.style.display = menuOpen ? "none" : "block";

    if (menuOpen) {
        body.classList.remove("menu-open");
    } else {
        body.classList.add("menu-open");
    }
}

document.getElementById("bars").addEventListener("click", toggleMenu);
document.getElementById("times").addEventListener("click", toggleMenu);


/* Menu 2 */
// Obtiene elementos DOM una vez en la carga de la página
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menu = document.querySelector(".header__dos--menu");

    // Función para alternar la visibilidad del menú en dispositivos móviles
    function toggleMobileMenu() {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // Función para restablecer los estilos en dispositivos más grandes
    function resetStyles() {
        const isMobileNow = window.matchMedia("(max-width: 464px)").matches;
        menu.style.display = isMobileNow ? "none" : "";
    }

    // Configura el comportamiento del botón de menú en dispositivos móviles
    menuButton.addEventListener("click", toggleMobileMenu);

    // Llama a la función para restablecer los estilos cuando cambia el tamaño de la pantalla
    window.addEventListener("resize", resetStyles);

    // Llama a la función para establecer los estilos iniciales
    resetStyles();
});
