//tablero
let tablero;
let anchoTablero = 360;
let altoTablero = 576;
let contexto;

//doodler
let anchoDoodler = 46;
let altoDoodler = 46;
let doodlerX = anchoTablero / 2 - anchoDoodler / 2;
let doodlerY = altoTablero * 7 / 8 - altoDoodler;
let doodlerImgDerecha;
let doodlerImgIzquierda;

let doodler = {
    img: null,
    x: doodlerX,
    y: doodlerY,
    ancho: anchoDoodler,
    alto: altoDoodler
}

//físicas
let velocidadX = 0; 
let velocidadY = 0; //velocidad del salto del doodler
let velocidadInicialY = -8; //velocidad inicial en Y
let gravedad = 0.4;

//plataformas
let plataformas = [];
let anchoPlataforma = 60;
let altoPlataforma = 18;
let plataformaImg;

let puntaje = 0;
let puntajeMaximo = 0;
let juegoTerminado = false;

window.onload = function() {
    tablero = document.getElementById("tablero");
    tablero.height = altoTablero;
    tablero.width = anchoTablero;
    contexto = tablero.getContext("2d"); //escritura en el tablero

    //dibuja el doodler
    // contexto.fillStyle = "verde";
    // contexto.fillRect(doodler.x, doodler.y, doodler.ancho, doodler.alto);

    //carga la imagen
    doodlerImgDerecha = new Image();
    doodlerImgDerecha.src = "./doodler-right.png";
    doodler.img = doodlerImgDerecha;
    doodlerImgDerecha.onload = function() {
        contexto.drawImage(doodler.img, doodler.x, doodler.y, doodler.ancho, doodler.alto);
    }

    doodlerImgIzquierda = new Image();
    doodlerImgIzquierda.src = "./doodler-left.png";

    plataformaImg = new Image();
    plataformaImg.src = "./platform.png";

    velocidadY = velocidadInicialY;
    colocarPlataformas();
    requestAnimationFrame(actualizar);
    document.addEventListener("keydown", moverDoodler);
}
