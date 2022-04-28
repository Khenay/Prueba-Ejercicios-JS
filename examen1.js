function dosNumeros() {
    var n1 = window.prompt('Introduce un número')
    var n2 = window.prompt('Introduce otro número')
    if ((n1 % 2 == 0 && n1 % 7 == 0) && (n2 % 2 == 0 && n2 % 7 == 0)) {
        alert('Ambos números son pares y múltiplos de siete')
    } else if ((n1 % 2 == 0 && n1 % 7 == 0) || (n2 % 2 == 0 && n2 % 7 == 0)) {
        alert('Uno de los número es par y múltiplo de siete')
    } else {
        alert('Ninguno de los números es par y múltiplo de siete')
    }
};
function unaPalabra() {
    var palabra = window.prompt('Introduce una palabra')
    if (palabra[0] == 'a' && palabra[palabra.length - 1] == 'a') {
        alert('Tu palabra empieza y termina por a')
    } else if (palabra[palabra.length - 1] == 'a') {
        alert('Tu palabra termina por a')
    } else if (palabra[0] == 'a') {
        alert('Tu palabra empieza por a')
    } else {
        alert('Tu palabra ni termina ni empieza por a')
    }
};