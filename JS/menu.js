// Obtén una referencia al elemento de entrada de checkbox
const checkbox = document.getElementById('check');

// Obtén una referencia a los íconos de barras y equis
const barsIcon = document.getElementById('bars');
const timesIcon = document.getElementById('times');

// Agrega un event listener para alternar el menú cuando se hace clic en el botón
checkbox.addEventListener('change', function () {
    if (this.checked) {
        // Si la casilla está marcada, muestra el menú y cambia el ícono a 'x'
        barsIcon.style.display = 'none';
        timesIcon.style.display = 'block';
    } else {
        // Si la casilla no está marcada, oculta el menú y cambia el ícono a 'bars'
        barsIcon.style.display = 'block';
        timesIcon.style.display = 'none';
    }
});

