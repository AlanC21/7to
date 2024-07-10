// Variables globales
let palabra = '';
let palabraOculta = '';
let intentos = 6;
const letrasUsadas = new Set();

// Elementos del DOM
const btnEmpezar = document.getElementById('btnEmpezar');
const btnReiniciar = document.getElementById('btnReiniciar');
const introduccion = document.getElementById('introduccion');
const juegoContainer = document.getElementById('juego');

function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Función para obtener una palabra aleatoria
async function obtenerPalabra() {
    try {
        const respuesta = await fetch('https://random-word-api.herokuapp.com/word?lang=es');
        const [palabraAleatoria] = await respuesta.json();
        return normalizarTexto(palabraAleatoria.toUpperCase());
    } catch (error) {
        console.error('Error al obtener la palabra:', error);
        return 'PROGRAMACION'; // Palabra por defecto en caso de error
    }
}

// Función para inicializar el juego
async function iniciarJuego() {
    introduccion.style.display = 'none';
    juegoContainer.style.display = 'block';
    btnReiniciar.style.display = 'none';
    
    palabra = await obtenerPalabra();
    palabraOculta = palabra.split('').map(letra => letra === ' ' ? ' ' : '_').join('');
    intentos = 6;
    letrasUsadas.clear();
    
    actualizarPalabra();
    crearTeclado();
    dibujarAhorcado();
    mostrarMensaje('');
}

// Función para actualizar la palabra oculta en la pantalla
function actualizarPalabra() {
    document.getElementById('palabra').textContent = palabraOculta;
}

// Función para crear el teclado virtual
function crearTeclado() {
    const teclado = document.getElementById('teclado');
    teclado.innerHTML = ''; // Limpiar teclado existente
    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const boton = document.createElement('button');
        boton.textContent = letra;
        boton.className = 'tecla';
        boton.addEventListener('click', () => intentarLetra(letra));
        teclado.appendChild(boton);
    }
}

// Función para manejar el intento de una letra
function intentarLetra(letra) {
    letra = normalizarTexto(letra);
    if (letrasUsadas.has(letra)) return;
    letrasUsadas.add(letra);

    if (normalizarTexto(palabra).includes(letra)) {
        actualizarPalabraOculta(letra);
    } else {
        intentos--;
        dibujarAhorcado();
    }

    actualizarPalabra();
    verificarEstadoJuego();
    deshabilitarTecla(letra);
}

// Función para actualizar la palabra oculta con la letra adivinada
function actualizarPalabraOculta(letra) {
    palabraOculta = palabraOculta.split('').map((char, index) => 
        palabra[index] === letra ? letra : char
    ).join('');
}

// Función para verificar el estado del juego
function verificarEstadoJuego() {
    if (palabraOculta === palabra) {
        mostrarMensaje('¡Felicidades! Has ganado.');
        finalizarJuego();
    } else if (intentos === 0) {
        mostrarMensaje(`Game Over. La palabra era: ${palabra}`);
        finalizarJuego();
    }
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje) {
    document.getElementById('mensaje').textContent = mensaje;
}

// Función para deshabilitar una tecla
function deshabilitarTecla(letra) {
    const teclas = document.querySelectorAll('.tecla');
    teclas.forEach(tecla => {
        if (tecla.textContent === letra) {
            tecla.disabled = true;
        }
    });
}

// Función para deshabilitar todo el teclado
function deshabilitarTeclado() {
    const teclas = document.querySelectorAll('.tecla');
    teclas.forEach(tecla => tecla.disabled = true);
}

// Función para dibujar el ahorcado
function dibujarAhorcado() {
    const canvas = document.getElementById('ahorcado');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;

    // Dibujar base
    ctx.beginPath();
    ctx.moveTo(20, 180);
    ctx.lineTo(180, 180);
    ctx.moveTo(40, 180);
    ctx.lineTo(40, 20);
    ctx.moveTo(40, 20);
    ctx.lineTo(100, 20);
    ctx.moveTo(100, 20);
    ctx.lineTo(100, 40);
    ctx.stroke();

    if (intentos < 6) {
        // Cabeza
        ctx.beginPath();
        ctx.arc(100, 60, 20, 0, Math.PI * 2);
        ctx.stroke();
    }

    if (intentos < 5) {
        // Cuerpo
        ctx.beginPath();
        ctx.moveTo(100, 80);
        ctx.lineTo(100, 130);
        ctx.stroke();
    }

    if (intentos < 4) {
        // Brazo izquierdo
        ctx.beginPath();
        ctx.moveTo(100, 80);
        ctx.lineTo(70, 100);
        ctx.stroke();
    }

    if (intentos < 3) {
        // Brazo derecho
        ctx.beginPath();
        ctx.moveTo(100, 80);
        ctx.lineTo(130, 100);
        ctx.stroke();
    }

    if (intentos < 2) {
        // Pierna izquierda
        ctx.beginPath();
        ctx.moveTo(100, 130);
        ctx.lineTo(80, 160);
        ctx.stroke();
    }

    if (intentos < 1) {
        // Pierna derecha
        ctx.beginPath();
        ctx.moveTo(100, 130);
        ctx.lineTo(120, 160);
        ctx.stroke();
    }
}

// Función para finalizar el juego
function finalizarJuego() {
    deshabilitarTeclado();
    btnReiniciar.style.display = 'inline-block';
}

// Event Listeners
btnEmpezar.addEventListener('click', iniciarJuego);
btnReiniciar.addEventListener('click', iniciarJuego);