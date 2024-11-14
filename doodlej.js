const canvas = document.getElementById('gameCanvas'); //Lienzo
const ctx = canvas.getContext('2d');  //contexto

//configuración básica
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const backgroundSprite = new Image();
backgroundSprite.src = 'assets/imagenes/bg_layer3.png';

// Función para dibujar el fondo en el canvas
function drawBackground() {
    ctx.drawImage(backgroundSprite, 0, 0, canvas.width, canvas.height);
}

// Bucle principal del juego
function gameLoop() {
    // Dibujar el fondo en cada cuadro
    drawBackground();

    // Aquí iría el resto de la lógica y dibujo del juego

    requestAnimationFrame(gameLoop);
}

// Iniciar el juego después de que la imagen de fondo se haya cargado
backgroundSprite.onload = function() {
    gameLoop();
};
