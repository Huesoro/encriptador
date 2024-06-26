// encriptador.js

document.getElementById('encriptar').addEventListener('click', function() {
    let texto = document.getElementById('texto').value;
    if (texto) {
        let textoEncriptado = encriptar(texto);
        mostrarResultado(textoEncriptado);
    }
});

document.getElementById('desencriptar').addEventListener('click', function() {
    let texto = document.getElementById('texto').value;
    if (texto) {
        let textoDesencriptado = desencriptar(texto);
        mostrarResultado(textoDesencriptado);
    }
});

document.getElementById('copiar').addEventListener('click', function() {
    let textoResultado = document.getElementById('resultado').textContent;
    copiarAlPortapapeles(textoResultado);
});

function encriptar(texto) {
    // Reemplazar las letras según las reglas de encriptado
    let textoEncriptado = texto
        .replace(/e/g, "defe")
        .replace(/i/g, "difi")
        .replace(/a/g, "dafa")
        .replace(/o/g, "dofo")
        .replace(/u/g, "dufu");
    return textoEncriptado;
}

function desencriptar(texto) {
    // Reemplazar las letras encriptadas por las originales
    let textoDesencriptado = texto
        .replace(/defe/g, "e")
        .replace(/difi/g, "i")
        .replace(/dafa/g, "a")
        .replace(/dofo/g, "o")
        .replace(/dufu/g, "u");
    return textoDesencriptado;
}

function mostrarResultado(texto) {
    document.getElementById('resultado').textContent = texto;
    document.getElementById('resultado-container').classList.remove('hidden');
    document.getElementById('copiar').classList.remove('hidden');
    document.getElementById("image").classList.add("hidden");
    if (!texto) {
        document.getElementById('resultado').textContent = 'Ningún mensaje fue encontrado';
        document.getElementById('copiar').classList.add('hidden')
        document.getElementById("image").classList.remove("hidden");
    }
}

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}

// Inicializa el estado del resultado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarResultado('');
});

document.getElementById("footer").innerText = "Creado por Kaleb Flores en 2024"