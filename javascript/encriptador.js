
/*
e-enter
i-imes
a-ai
o-ober
u-ufat
*/

// function encriptado(params) {
//     var texto = document.getElementById('mensaje').value.toLowerCase();
//     var cifrado = texto.replace(/e/img, 'enter');
//     var cifrado = cifrado.replace(/i/img, 'imes');
//     var cifrado = cifrado.replace(/a/img, 'ai');
//     var cifrado = cifrado.replace(/o/img, 'ober');
    
// }

const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matriz.length; i++) {
        if (stringEncriptada.includes(matriz[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1]);
        }
        
    }

    return stringEncriptada
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}


function desencriptar(stringDesencriptada) {
    let matriz = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matriz.length; i++) {
        if (stringDesencriptada.includes(matriz[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matriz[i][1], matriz[i][0]);
        }
        
    }

    return stringDesencriptada
}

